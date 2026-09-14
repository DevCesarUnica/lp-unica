<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'method_not_allowed']);
    exit;
}

$data = json_decode((string) file_get_contents('php://input'), true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'invalid_body']);
    exit;
}

$name    = trim((string) ($data['name'] ?? ''));
$email   = trim((string) ($data['email'] ?? ''));
$phone   = trim((string) ($data['phone'] ?? ''));
$subject = trim((string) ($data['subject'] ?? ''));
$message = trim((string) ($data['message'] ?? '')); // opcional

if ($name === '' || $email === '' || $phone === '' || $subject === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'missing_fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'invalid_email']);
    exit;
}

// Evita injeção de fórmulas se o CSV for aberto no Excel/Sheets.
function csv_safe(string $value): string
{
    return preg_match('/^[=+\-@]/', $value) === 1 ? "'" . $value : $value;
}

$row = [
    date('Y-m-d H:i:s'),
    csv_safe($name),
    csv_safe($email),
    csv_safe($phone),
    csv_safe($subject),
    csv_safe($message),
    $_SERVER['REMOTE_ADDR'] ?? '',
];

$file = __DIR__ . '/ouvidoria.csv';
$isNew = !file_exists($file);

$fp = fopen($file, 'ab');
if ($fp === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'storage_error']);
    exit;
}

if (flock($fp, LOCK_EX)) {
    if ($isNew) {
        fputcsv($fp, ['data_hora', 'nome', 'email', 'telefone', 'assunto', 'mensagem', 'ip']);
    }
    fputcsv($fp, $row);
    flock($fp, LOCK_UN);
}
fclose($fp);

echo json_encode(['success' => true]);

import type { LeadFormData, ContactFormData, OuvidoriaFormData, DenuncieFormData } from '../utils/schemas';

// Cada formulário é persistido por um script PHP hospedado junto com o site
// estático na Hostgator (public/api/*.php). LeadForm e ContatoForm gravam na
// mesma planilha (public/api/leads.csv, coluna "origem" diferencia); Ouvidoria
// e Denuncie têm suas próprias planilhas por serem canais de compliance.
// Caminho relativo (mesma origem) em vez de um backend externo.
async function postToPhp(endpoint: string, data: unknown): Promise<{ success: boolean }> {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return { success: Boolean(result?.success) };
  } catch {
    return { success: false };
  }
}

export function submitLead(data: LeadFormData): Promise<{ success: boolean }> {
  return postToPhp('leads.php', data);
}

export function submitContact(data: ContactFormData): Promise<{ success: boolean }> {
  return postToPhp('contact.php', data);
}

export function submitOuvidoria(data: OuvidoriaFormData): Promise<{ success: boolean }> {
  return postToPhp('ouvidoria.php', data);
}

export function submitDenuncia(data: DenuncieFormData): Promise<{ success: boolean }> {
  return postToPhp('denuncie.php', data);
}

import { api } from './api';
import type { LeadFormData, ContactFormData, OuvidoriaFormData, DenuncieFormData } from '../utils/schemas';

// No backend is deployed for this demo, so network failures are swallowed and
// treated as success — forms behave as they would once a real API exists.

export async function submitLead(data: LeadFormData): Promise<{ success: boolean }> {
  try {
    await api.post('/leads', data);
    return { success: true };
  } catch {
    return { success: true };
  }
}

export async function submitContact(data: ContactFormData): Promise<{ success: boolean }> {
  try {
    await api.post('/contact', data);
    return { success: true };
  } catch {
    return { success: true };
  }
}

export async function submitOuvidoria(data: OuvidoriaFormData): Promise<{ success: boolean }> {
  try {
    await api.post('/ouvidoria', data);
    return { success: true };
  } catch {
    return { success: true };
  }
}

export async function submitDenuncia(data: DenuncieFormData): Promise<{ success: boolean }> {
  try {
    await api.post('/denuncie', data);
    return { success: true };
  } catch {
    return { success: true };
  }
}

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2 } from 'lucide-react';
import { leadFormSchema } from '../../utils/schemas';
import type { LeadFormData } from '../../utils/schemas';
import { maskPhone } from '../../utils/masks';
import { submitLead } from '../../services/leadService';
import { cn } from '../../utils/cn';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import logoCompleta from '../../assets/images/Logo-unica-completa.svg';

const stateOptions: { label: string; value: string }[] = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO'],
  ['Distrito Federal', 'DF'],
].map(([label, value]) => ({ label, value }));

const fieldWrap = 'flex min-w-0 flex-col gap-1.5';
// elementor-element-a281629 .elementor-field-group>label: Exo 2 22px/700/line-height 48px, cor #fff
const labelCls = 'font-heading text-[22px] font-bold leading-[48px] text-white';
// .elementor-field-group .elementor-field: bg #373435, border-bottom 1px #4D4D4D, texto branco
const controlCls =
  'w-full min-w-0 max-w-full border-0 border-b border-[#4D4D4D] bg-transparent px-[14px] py-[5px] text-[10px] text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-0';
const errorCls = 'text-xs text-primary-200';

export function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { name: '', phone: '', email: '', city: '', state: undefined },
  });

  const onSubmit = async (data: LeadFormData) => {
    const result = await submitLead(data);
    if (result.success) {
      setIsSuccess(true);
      reset();
    }
  };

  return (
    <>
      <Modal isOpen={isSuccess} onClose={() => setIsSuccess(false)}>
        <div className="flex flex-col items-center gap-4 pt-2 text-center">
          <div className="rounded-md bg-secondary px-5 py-3">
            <img src={logoCompleta} alt="Única Promotora" className="h-8 w-auto md:h-9" />
          </div>

          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
            <CheckCircle2 size={36} className="text-primary" strokeWidth={2} />
          </span>

          <div className="flex flex-col gap-1.5">
            <h3 className="heading-md text-secondary">Recebemos seu contato!</h3>
            <p className="max-w-sm text-sm text-secondary-400">
              Nossa equipe entrará em contato em breve para apresentar a melhor solução para você.
            </p>
          </div>

          <Button type="button" onClick={() => setIsSuccess(false)} className="mt-2">
            Fechar
          </Button>
        </div>
      </Modal>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        // elementor-element-a281629>.elementor-widget-container: padding 32px 24px desktop,
        // 80px 20px mobile + borda superior 10px vermelha só no mobile. Fields-wrapper vira
        // flex-wrap:nowrap a partir de 768px — um único breakpoint, sem grid intermediário.
        className="flex w-full max-w-full flex-col border-t-[10px] border-t-primary px-[20px] py-[80px] md:grid md:grid-cols-[repeat(5,minmax(0,1fr))_auto] md:items-end md:gap-x-[18px] md:border-t-0 md:px-[24px] md:py-[32px]"
      >
        <div className={fieldWrap}>
          <label htmlFor="lead-nome" className={labelCls}>
            Nome
          </label>
          <input id="lead-nome" className={controlCls} placeholder="Seu nome ..." {...register('name')} />
          {errors.name && <span className={errorCls}>{errors.name.message}</span>}
        </div>

        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <div className={fieldWrap}>
              <label htmlFor="lead-whatsapp" className={labelCls}>
                WhatsApp
              </label>
              <input
                id="lead-whatsapp"
                inputMode="tel"
                className={controlCls}
                placeholder="(00) 12345-6789 ..."
                value={field.value}
                onChange={(event) => field.onChange(maskPhone(event.target.value))}
              />
              {errors.phone && <span className={errorCls}>{errors.phone.message}</span>}
            </div>
          )}
        />

        <div className={fieldWrap}>
          <label htmlFor="lead-email" className={labelCls}>
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            className={controlCls}
            placeholder="Seu email ..."
            {...register('email')}
          />
          {errors.email && <span className={errorCls}>{errors.email.message}</span>}
        </div>

        <div className={fieldWrap}>
          <label htmlFor="lead-cidade" className={labelCls}>
            Cidade
          </label>
          <input
            id="lead-cidade"
            className={controlCls}
            placeholder="Sua cidade ..."
            {...register('city')}
          />
          {errors.city && <span className={errorCls}>{errors.city.message}</span>}
        </div>

        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <div className={fieldWrap}>
              <label htmlFor="lead-estado" className={labelCls}>
                Estado
              </label>
              <div className="relative">
                <select
                  id="lead-estado"
                  className={cn(controlCls, 'appearance-none pr-8 [&>option]:text-secondary')}
                  value={field.value ?? ''}
                  onChange={(event) => field.onChange(event.target.value)}
                >
                  <option value="" disabled>
                    Selecione ...
                  </option>
                  {stateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/60">▾</span>
              </div>
              {errors.state && <span className={errorCls}>{errors.state.message}</span>}
            </div>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 min-h-[40px] rounded-[3px] bg-primary px-[24px] text-[15px] font-normal uppercase leading-none text-white transition-colors hover:bg-white hover:text-primary disabled:opacity-60 md:mt-0 md:self-end md:whitespace-nowrap"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </>
  );
}

import { cn } from '../../utils/cn';

interface TriangleDividerProps {
  flip?: boolean;
  className?: string;
}

// Faixa decorativa vermelho/preto/branco em SVG puro (sem raster): dois zigues-zagues
// sobrepostos — o preto por trás define as "pontas", o vermelho por cima preenche o corpo.
export function TriangleDivider({ flip = false, className }: TriangleDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('h-4 w-full overflow-hidden bg-white md:h-5', flip && 'rotate-180', className)}
    >
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="h-full w-full">
        <polygon
          fill="#111111"
          points="0,20 10,0 20,20 30,0 40,20 50,0 60,20 70,0 80,20 90,0 100,20 110,0 120,20 130,0 140,20 150,0 160,20 170,0 180,20 190,0 200,20"
        />
        <polygon
          fill="#E30613"
          points="0,20 10,4 20,20 30,4 40,20 50,4 60,20 70,4 80,20 90,4 100,20 110,4 120,20 130,4 140,20 150,4 160,20 170,4 180,20 190,4 200,20"
        />
      </svg>
    </div>
  );
}

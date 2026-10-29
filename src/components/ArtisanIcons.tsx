/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Artisan Icons Set - Exclusivo Salão de Beleza & Nail Designer Ana Maria
 * Vetores SVG ultraleves (0kb overhead de rede, zero CLS, totalmente acessíveis)
 * Estilo: Fine line art metálico ouro rosé (#D8A0A4) e champanhe (#C8AD91).
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/** 1. Curvatura de Fibra de Vidro e Ápice Natural */
export const FiberglassCurveIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M8 20V12C8 7.58172 9.79086 4 12 4C14.2091 4 16 7.58172 16 12V20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M10 13C10 9 10.8954 6.5 12 6.5C13.1046 6.5 14 9 14 13"
      stroke="#D8A0A4"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="1 2.5"
    />
    <path
      d="M9 17C10.2 18 13.8 18 15 17"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M7 20H17"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

/** 2. Escudo de Biossegurança e Esterilização em Autoclave */
export const AutoclaveShieldIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12 3L4 6.5V11.5C4 16.5 7.4 20.8 12 22C16.6 20.8 20 16.5 20 11.5V6.5L12 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V16M8 12H16"
      stroke="#D8A0A4"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Sparkle no topo do escudo */}
    <path
      d="M19 3L19.8 4.8L21.6 5.6L19.8 6.4L19 8.2L18.2 6.4L16.4 5.6L18.2 4.8L19 3Z"
      fill="#C8AD91"
    />
  </svg>
);

/** 3. Brilho Cristal Diamante e Esmaltação em Gel Blindada */
export const DiamondShineIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M6 9L12 3L18 9L12 21L6 9Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9H18M12 3V21"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9L12 21L15 9"
      stroke="#D8A0A4"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Raios de luz sutis */}
    <line x1="2.5" y1="9" x2="4" y2="9" stroke="#C8AD91" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="20" y1="9" x2="21.5" y2="9" stroke="#C8AD91" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="12" y1="1" x2="12" y2="2" stroke="#C8AD91" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/** 4. Pincel Artístico de Alta Precisão (Nail Art & Traços Finos) */
export const PrecisionBrushIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M19 4L14.5 8.5M16 7L17 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M14.5 8.5L8.5 14.5C8 15 7.5 16 6 18C8 16.5 9 16 9.5 15.5L15.5 9.5L14.5 8.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Traço de esmalte com ponto final perolado */}
    <path
      d="M4 20C6 19.5 8 20.5 11 19.5"
      stroke="#D8A0A4"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="12.5" cy="19.5" r="1.2" fill="#C8AD91" />
  </svg>
);

/** 5. Agenda & Caderno do Estúdio com Caneta */
export const StudioCalendarIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    {/* Livro de agendamentos aberto */}
    <path
      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 8H9M6 11H9M6 14H8" stroke="#D8A0A4" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M15 8H18M15 11H18M15 14H17" stroke="#C8AD91" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="12" cy="3" r="1" fill="#D8A0A4" />
  </svg>
);

/** 6. Selo Artesanal com Fitas de Reconhecimento */
export const ArtisanSealIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="10" r="4.2" stroke="#D8A0A4" strokeWidth="1" strokeDasharray="1.5 2" />
    {/* Monograma ou Estrela interna */}
    <path
      d="M12 7.5L12.7 9L14.3 9.2L13.1 10.3L13.5 11.9L12 11L10.5 11.9L10.9 10.3L9.7 9.2L11.3 9L12 7.5Z"
      fill="#C8AD91"
    />
    {/* Fitas pendentes */}
    <path
      d="M9 15L7 21L12 19L17 21L15 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

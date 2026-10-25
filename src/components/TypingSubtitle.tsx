/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface TypingSubtitleProps {
  reducedMotion?: boolean | null;
}

export const TypingSubtitle: React.FC<TypingSubtitleProps> = () => {
  return (
    <p
      className="text-[#E8D9D4]/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light"
    >
      Especialista em{' '}
      <strong className="text-[#F7F3F1] font-semibold">alongamento em fibra de vidro</strong>{' '}
      e{' '}
      <strong className="text-[#F7F3F1] font-semibold">esmaltação em gel de alto padrão</strong>.
      Estruturas finas, acabamento espelhado e cuidado minucioso com a saúde da sua lâmina ungueal.
    </p>
  );
};

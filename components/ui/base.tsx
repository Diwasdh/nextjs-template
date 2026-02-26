import { ReactNode } from 'react';
import { Flex } from './flex';

interface BaseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Base wraps the entire page content
 * - Provides consistent vertical spacing
 * - Handles min-height or full-screen flex if needed
 */
export function Base({ children, className = '' }: BaseProps) {
  return (
    <main>
      <Flex className={`flex-col min-h-screen items-center justify-start gap-8 ${className}`}>
        {children}
      </Flex>
    </main>
  );
}

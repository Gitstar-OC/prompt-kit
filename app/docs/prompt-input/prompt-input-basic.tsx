'use client';
import { useState } from 'react';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputAction,
  PromptInputActions,
} from '@/components/agi-kit/prompt-input';
import { ArrowUp, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PromptInputBasic() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleValueChange = (value: string) => {
    setInput(value);
  };

  return (
    <PromptInput
      value={input}
      onValueChange={handleValueChange}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      className='w-full max-w-(--breakpoint-md)'
    >
      <PromptInputTextarea placeholder='Ask me anything...' />
      <PromptInputActions className='justify-end pt-2'>
        <PromptInputAction
          tooltip={isLoading ? 'Stop generation' : 'Send message'}
        >
          <Button
            variant='default'
            size='icon'
            className='h-8 w-8 rounded-full'
            onClick={handleSubmit}
          >
            {isLoading ? (
              <Square className='size-5 fill-current' />
            ) : (
              <ArrowUp className='size-5' />
            )}
          </Button>
        </PromptInputAction>
      </PromptInputActions>
    </PromptInput>
  );
}

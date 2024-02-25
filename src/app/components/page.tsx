'use client';
import Button from '@/components/buttons/Button';
import ThemeButton from '@/components/buttons/ThemeButton';
import StyledInput from '@/components/form/StyledInput';

export default function Components() {
  return (
    <div className="flex flex-col mt-8 gap-4 justify-center items-center m-auto align-middle md:w-[40rem]">
      <ThemeButton />

      <Button> Button label</Button>

      <StyledInput />
    </div>
  );
}

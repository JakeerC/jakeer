import Button from '@/components/buttons/Button';
import ThemeButton from '@/components/buttons/ThemeButton';

export default function Components() {
  return (
    <div className="flex flex-col mt-8 gap-4 justify-center items-center">
      <ThemeButton> Test</ThemeButton>

      <Button> Button label</Button>
    </div>
  );
}

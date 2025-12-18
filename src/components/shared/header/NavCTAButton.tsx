'use client';
import LinkButton from '@/components/ui/button/LinkButton';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

interface NavCTAButtonProps {
  btnClassName?: string;
  href: string;
  label: string;
  className?: string;
}

const NavCTAButton = ({ btnClassName, href = '/', label, className }: NavCTAButtonProps) => {
  const t = useTranslations('Navigation');

  return (
    <div className={cn('hidden items-center justify-center xl:flex mr-2', className)}>
      <LinkButton href={href} className={cn('btn btn-md', btnClassName)}>
        {t(label)}
      </LinkButton>
    </div>
  );
};

export default NavCTAButton;

'use client';

// Header v1
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import { FC } from 'react';
import MobileMenu from '../MobileMenu';
import AboutMenu from '../mega-menu/AboutMenu';
import BlogMenu from '../mega-menu/BlogMenu';
import PricingMenu from '../mega-menu/PricingMenu';
import HomeMegaMenu from '../mega-menu/HomeMegaMenu';
import PageMegaMenu from '../mega-menu/PageMegaMenu';
import ServicesMenu from '../mega-menu/ServicesMenu';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

interface NavbarOneProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarOne: FC<NavbarOneProps> = ({ className, megaMenuColor, btnClassName }) => {
  const { isScrolled } = useNavbarScroll(100);

  return (
    <MobileMenuProvider>
      <header>
        <div
          className={cn(
            'relative z-50 mx-auto my-3 flex w-full items-center justify-between px-2.5 py-2.5 transition-all duration-500 ease-in-out xl:py-0',
            className,
          )}>
          {/* logo */}
          <Logo />
          {/* navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center">
              {navigationItems.map((item) => {
                const renderMegaMenu = () => {
                  switch (item?.megaMenuComponent) {
                    case 'HomeMegaMenu':
                      return <HomeMegaMenu className={megaMenuColor} />;
                    case 'PageMegaMenu':
                      return <PageMegaMenu className={megaMenuColor} />;
                    case 'AboutMenu':
                      return <AboutMenu className={megaMenuColor} />;
                    case 'ServicesMenu':
                      return <ServicesMenu className={megaMenuColor} />;
                    case 'BlogMenu':
                      return <BlogMenu className={megaMenuColor} />;
                    case 'PricingMenu':
                      return <PricingMenu className={megaMenuColor} />;
                    default:
                      return null;
                  }
                };

                // mega menu render
                return (
                  <li key={item?.id} className={cn('py-2.5', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                    <NavItemLink item={item} variant='default' />
                    {item.hasDropdown && renderMegaMenu()}
                  </li>
                );
              })}
            </ul>
          </nav>
          <NavCTAButton href="/signup-01" btnClassName={btnClassName} label="Get started" />
          {/* mobile menu btn */}
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

NavbarOne.displayName = 'NavbarOne';
export default NavbarOne;

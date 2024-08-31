import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="bg-green-800 border-green-600 hover:bg-green-700 hover:border-green-500 transition-colors duration-300"
        >
          <Globe className="h-[1.2rem] w-[1.2rem] text-green-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-green-900 border border-green-600 shadow-lg shadow-green-500/20"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              flex items-center px-4 py-2 text-sm text-green-200 hover:bg-green-800 hover:text-white transition-colors duration-200
              ${language === lang.code ? 'bg-green-700' : ''}
            `}
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

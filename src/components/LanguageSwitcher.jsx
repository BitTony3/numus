import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        onClick={() => setLanguage('es')}
      >
        ES
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        onClick={() => setLanguage('fr')}
      >
        FR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
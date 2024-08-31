import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="absolute top-4 left-4 text-green-400 hover:text-green-300"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft size={24} />
    </Button>
  );
};

export default BackButton;
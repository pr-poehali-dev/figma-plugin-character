import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Character {
  name: string;
  age: string;
  description: string;
}

export default function Index() {
  const [character, setCharacter] = useState<Character>({
    name: 'Алекс Морган',
    age: '28',
    description: 'Талантливый архитектор с необычным взглядом на городское пространство. Любит минимализм и чистые линии в дизайне.'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempCharacter, setTempCharacter] = useState<Character>(character);

  const handleEdit = () => {
    setTempCharacter(character);
    setIsEditing(true);
  };

  const handleSave = () => {
    setCharacter(tempCharacter);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempCharacter(character);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
            Карточка персонажа
          </h1>
          <p className="text-muted-foreground">Минималистичный дизайн</p>
        </div>

        <Card className="p-8 shadow-2xl border-0 animate-scale-in">
          {!isEditing ? (
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider font-medium">
                  <Icon name="User" size={16} />
                  <span>Имя</span>
                </div>
                <p className="font-heading text-3xl font-bold text-foreground pl-6">
                  {character.name}
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider font-medium">
                  <Icon name="Calendar" size={16} />
                  <span>Возраст</span>
                </div>
                <p className="font-heading text-3xl font-bold text-foreground pl-6">
                  {character.age}
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider font-medium">
                  <Icon name="FileText" size={16} />
                  <span>Описание</span>
                </div>
                <p className="text-base text-foreground/80 pl-6 leading-relaxed">
                  {character.description}
                </p>
              </div>

              <Button 
                onClick={handleEdit}
                className="w-full mt-8 h-12 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <Icon name="Pencil" size={18} className="mr-2" />
                Редактировать
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
                  <Icon name="User" size={16} />
                  Имя
                </Label>
                <Input
                  id="name"
                  value={tempCharacter.name}
                  onChange={(e) => setTempCharacter({ ...tempCharacter, name: e.target.value })}
                  className="h-12 text-lg border-2 focus:border-primary transition-colors"
                  placeholder="Введите имя"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
                  <Icon name="Calendar" size={16} />
                  Возраст
                </Label>
                <Input
                  id="age"
                  value={tempCharacter.age}
                  onChange={(e) => setTempCharacter({ ...tempCharacter, age: e.target.value })}
                  className="h-12 text-lg border-2 focus:border-primary transition-colors"
                  placeholder="Введите возраст"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
                  <Icon name="FileText" size={16} />
                  Описание
                </Label>
                <Textarea
                  id="description"
                  value={tempCharacter.description}
                  onChange={(e) => setTempCharacter({ ...tempCharacter, description: e.target.value })}
                  className="min-h-[120px] text-base border-2 focus:border-primary transition-colors resize-none"
                  placeholder="Опишите персонажа"
                />
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 h-12 text-base font-medium border-2 hover:bg-secondary transition-all duration-300"
                >
                  <Icon name="X" size={18} className="mr-2" />
                  Отмена
                </Button>
                <Button
                  onClick={handleSave}
                  className="flex-1 h-12 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  <Icon name="Check" size={18} className="mr-2" />
                  Сохранить
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
import { Switch } from '../ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Label } from '../ui/label';

export function ModeToggleSwitch() {
  const { theme, setTheme } = useTheme();

  // Toggles between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2 px-2">
      <Switch
        id="mode"
        checked={theme === 'dark'} // Sync switch with theme
        onCheckedChange={toggleTheme} // Toggle theme on change
      />
      <Label htmlFor="mode">
        {theme === 'light' ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )}
      </Label>
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}

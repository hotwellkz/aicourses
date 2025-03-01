import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import { TokenDisplay } from "@/components/TokenDisplay";

interface UserMenuProps {
  userEmail: string | null;
  onLogout: () => Promise<void>;
}

export const UserMenu = ({ userEmail, onLogout }: UserMenuProps) => {
  return (
    <div className="flex items-center gap-4">
      <Link
        to="/admin"
        className="text-white hover:text-primary transition-colors"
      >
        <Settings className="h-5 w-5" />
      </Link>
      <TokenDisplay />
      {userEmail ? (
        <div className="flex items-center gap-2">
          <Link 
            to="/profile"
            className="flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <User className="h-5 w-5" />
            {userEmail}
          </Link>
          <Button
            variant="ghost"
            className="text-white hover:text-primary"
            onClick={onLogout}
          >
            Выйти
          </Button>
        </div>
      ) : (
        <Link to="/auth">
          <Button>Войти</Button>
        </Link>
      )}
    </div>
  );
};
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import "./navbar.css";

export default function Navbar() {
  const { cart, wishlist } = useSelector((state: RootStore) => state.products);
  return (
    <header>
      <div className="header">
        <h1>
          <span>S</span>hopping
          <span>C</span>ard
        </h1>
        <Box>
          <Button
            variant="text"
            size="large"
            color="secondary"
            component={Link}
            to="/"
          >
            HOME
          </Button>
          <Button
            variant="text"
            size="large"
            color="secondary"
            component={Link}
            to="/shop"
          >
            SHOP
          </Button>

          <Button
            variant="text"
            size="large"
            color="secondary"
            component={Link}
            to="/admin"
          >
            ADMIN
          </Button>
        </Box>

        <Box>
          <IconButton
            size="small"
            color="inherit"
            component={Link}
            to="/wishlist"
          >
            <Badge badgeContent={wishlist.length} color="error">
              Wishlist
            </Badge>
          </IconButton>

          <IconButton size="large" color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </div>
    </header>
  );
}

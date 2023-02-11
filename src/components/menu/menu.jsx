import "./menu.scss";
import { DataContext } from "../../App";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function Menu() {
  let data = useContext(DataContext);

  let [count, setCount] = useState(1);

  return (
    <section className="menu">
      <div className="cards">
        {data
          .filter((item, index) => {
            if (index < count * 6 && index >= (count - 1) * 6) {
              return item;
            }
          })
          .map((item, index) => {
            return (
              <Card key={index}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.post}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography color="text.secondary">{item.id}</Typography>
                  <Typography variant="body2">
                    {item.email}
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            page={count}
            onChange={(event, value) => {
              setCount(value);
            }}
            count={10}
          />
        </Stack>
      </div>
    </section>
  );
}

export default Menu;

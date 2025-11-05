import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#f0f0f0",
        py: 4,
        mt: 6,
        display: "flex",
        justifyContent: "center",
        gap: 10, 
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography sx={{ pb: 2, fontSize: 22, fontWeight: 600 }}>
          Каталог товаров
        </Typography>
        <Typography sx={{ pb: 1 }}>Ковры</Typography>
        <Typography sx={{ pb: 1 }}>Коврики</Typography>
        <Typography sx={{ pb: 1 }}>Дорожки</Typography>
        <Typography sx={{ pb: 1 }}>Для ванной</Typography>
        <Typography sx={{ pb: 1 }}>Особенные ковры</Typography>
      </Box>

      <Box>
        <Typography sx={{ pb: 2, fontSize: 22, fontWeight: 600 }}>
          О компании
        </Typography>
        <Typography sx={{ pb: 1 }}>О нас</Typography>
        <Typography sx={{ pb: 1 }}>Контакты</Typography>
        <Typography sx={{ pb: 1 }}>Новости</Typography>
        <Typography sx={{ pb: 1 }}>Отзывы</Typography>
      </Box>

      <Box>
        <Typography sx={{ pb: 2, fontSize: 22, fontWeight: 600 }}>
          Клиентам
        </Typography>
        <Typography sx={{ pb: 1 }}>Доставка</Typography>
        <Typography sx={{ pb: 1 }}>Оплата</Typography>
        <Typography sx={{ pb: 1 }}>Возврат</Typography>
        <Typography sx={{ pb: 1 }}>Помощь</Typography>
      </Box>

      <Box>
        <Typography sx={{ pb: 2, fontSize: 22, fontWeight: 600 }}>
          Мы в соцсетях
        </Typography>
        <Typography sx={{ pb: 1 }}>Instagram</Typography>
        <Typography sx={{ pb: 1 }}>Facebook</Typography>
        <Typography sx={{ pb: 1 }}>Telegram</Typography>
        <Typography sx={{ pb: 1 }}>YouTube</Typography>
      </Box>
      
      <Box>
        <Typography sx={{ pb: 2, fontSize: 22, fontWeight: 600 }}>
          Контакты
        </Typography>
        <Typography sx={{ pb: 1 }}>+998 (90) 123-45-67</Typography>
        <Typography sx={{ pb: 1 }}>info@company.uz</Typography>
        <Typography sx={{ pb: 1 }}>г. Ташкент, ул. Навои, 12</Typography>
      </Box>
    </Box>
  );
}

import React from 'react'
import {
  Button,
  Box,
  Container,
  Input,
  SimpleGrid,
  Checkbox,
  UnorderedList,
  ListItem,
  Heading
} from '@chakra-ui/react'

const PageThree = () => {
  window.location.replace("https://khairullin.vercel.app/PageThree");
}

export default function PageOne() {

  return (

    <Container maxW="7xl" padding={4}>
      <Box padding={4}>
        <Box overflow="auto" gap={6}>
          <Button colorScheme='blue' marginBottom={"20px"}
          onClick={()=> PageThree()}>
            Подать объявление
          </Button>
          <Box padding={"10px"} borderRadius={"10px"} backgroundColor={"blue.500"}>
            <SimpleGrid columns={3} spacingX={"30px"}>
              <Input placeholder="Название товара или услуги" marginBottom={"20px"} backgroundColor={"white"}>
              </Input>
              <Input placeholder="Уфа" backgroundColor={"white"}>
              </Input>
              <Button >
                Найти
              </Button>
              <Checkbox colorScheme='white' textColor={"white"}>
                Только в названиях
              </Checkbox>
              <Checkbox colorScheme='white' textColor={"white"}>
                С фото
              </Checkbox>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box padding={4}>
        <Box overflow="auto" maxW="7xl" padding={4}>
          <SimpleGrid columns={3} spacingY={"30px"}>
            <Box>
              <Heading marginBottom={"10px"} size='md'>
                Транспорт
              </Heading>
              <UnorderedList>
                <ListItem>
                  Автомобили с пробегом
                </ListItem>
                <ListItem>
                  Новые автомобили
                </ListItem>
                <ListItem>
                  Мотоциклы и мототехника
                </ListItem>
                <ListItem>
                  Водный транспорт
                </ListItem>
                <ListItem>
                  Грузовики и спецтехника
                </ListItem>
                <ListItem>
                  Запчасти и аксессуары
                </ListItem>
                <ListItem>
                  Пассажирские микроавтобусы, автобусы
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading marginBottom={"10px"} size='md'>
                Недвижимость
              </Heading>
              <UnorderedList>
                <ListItem>
                  Комнаты
                </ListItem>
                <ListItem>
                  Квартиры
                </ListItem>
                <ListItem>
                  Коммерческая недвижимость
                </ListItem>
                <ListItem>
                  Дома, дачи, коттеджи
                </ListItem>
                <ListItem>
                  Земельные участки
                </ListItem>
                <ListItem>
                  Гаражи
                </ListItem>
                <ListItem>
                  Зарубежная недвижимость
                </ListItem>
                <ListItem>
                  Новостройки
                </ListItem>
                <ListItem>
                  Обмен
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading marginBottom={"10px"} size='md'>
                Всё для дома и сада
              </Heading>
              <UnorderedList>
                <ListItem>
                  Мебель
                </ListItem>
                <ListItem>
                  Посуда и товары для кухни
                </ListItem>
                <ListItem>
                  Сад и товары для сада
                </ListItem>
                <ListItem>
                  Предметы интерьера
                </ListItem>
                <ListItem>
                  Бытовая химия
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading marginBottom={"10px"} size='md'>
                Электроника
              </Heading>
              <UnorderedList>
                <ListItem>
                  Телефоны
                </ListItem>
                <ListItem>
                  Компьютеры
                </ListItem>
                <ListItem>
                  Фототехника
                </ListItem>
                <ListItem>
                  Аудио и видео
                </ListItem>
                <ListItem>
                  Бытовая техника
                </ListItem>
                <ListItem>
                  Орг. техника
                </ListItem>
                <ListItem>
                  Приставки и программы
                </ListItem>
                <ListItem>
                  Индивидуальный уход
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading marginBottom={"10px"} size='md'>
                Строительство и ремонт
              </Heading>
              <UnorderedList>
                <ListItem>
                  Готовые строения
                </ListItem>
                <ListItem>
                  Строительные материалы
                </ListItem>
                <ListItem>
                  Инструменты
                </ListItem>
                <ListItem>
                  Окна
                </ListItem>
                <ListItem>
                  Двери
                </ListItem>
                <ListItem>
                  Напольные покрытия
                </ListItem>
                <ListItem>
                  Потолки
                </ListItem>
                <ListItem>
                  Сантехника
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading marginBottom={"10px"} size='md'>
                Личные вещи
              </Heading>
              <UnorderedList>
                <ListItem>
                  Одежда и обувь
                </ListItem>
                <ListItem>
                  Аксессуары, часы и украшения
                </ListItem>
                <ListItem>
                  Товары для детей
                </ListItem>
                <ListItem>
                  Хенд Мейд
                </ListItem>
                <ListItem>
                  Здоровье и красота
                </ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Container >

  )

}
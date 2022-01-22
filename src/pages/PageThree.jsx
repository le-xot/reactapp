import React from 'react'
import {
  Button,
  Box,
  Container,
  Input,
  SimpleGrid,
  Checkbox,
  Heading,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Textarea,
  Spinner,
  Text,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'

const PageOne = () => {
  window.location.replace("https://khairullin.vercel.app/PageOne");
}

export default function PageThree() {

  return (

    <Container maxW="7xl" padding={4}>
      <Box padding={4}>
        <Box overflow="auto" gap={6}>
          <Flex justifyContent={'end'}>
            <Button colorScheme='blue' marginBottom={"20px"} 
             onClick={()=> PageOne()}>
              На главную
            </Button>
          </Flex>
          <Box padding={"10px"} borderRadius={"10px"} backgroundColor={"blue.500"}>
            <SimpleGrid columns={4} spacingX={"30px"}>
              <Input placeholder="Название товара или услуги" marginBottom={"20px"} backgroundColor={"white"}>
              </Input>
              <Select placeholder="Все категории" backgroundColor={"white"}>
                <option>Транспорт</option>
                <option>Недвижимость</option>
                <option>Всё для дома и сада</option>
                <option>Электроника</option>
                <option>Строительство и ремонт</option>
                <option>Личные вещи</option>
              </Select>
              <Input placeholder="Уфа" backgroundColor={"white"}>
              </Input>
              <Button>
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
          <Heading marginBottom={"10px"} size='md'>
            Категория
          </Heading>
          <Select placeholder="Все категории" backgroundColor={"white"} marginBottom={"30px"}>
            <option>Транспорт</option>
            <option>Недвижимость</option>
            <option>Всё для дома и сада</option>
            <option>Электроника</option>
            <option>Строительство и ремонт</option>
            <option>Личные вещи</option>
          </Select>
          <Heading marginBottom={"10px"} size='md'>
            Заголовок
          </Heading>
          <Input marginBottom={"30px"}>
          </Input>
          <Heading marginBottom={"10px"} size='md'>
            Описание
          </Heading>
          <Textarea />

          <Popover >
            <PopoverTrigger marginBottom={"30px"}>
              <Button marginTop={"30px"} size='md'>Нажмите чтобы загрузить фотографии</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader marginTop={"20px"}>Перетащите фотографии в поле ниже</PopoverHeader>
              <PopoverBody>
                <Flex>
                  <Spinner marginLeft={"125px"} size='xl' />
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Heading marginTop={"30px"} marginBottom={"10px"} size='md'>
            Местоположение
          </Heading>
          <Text marginTop={"30px"} marginBottom={"10px"}>
            Город
          </Text>
          <Input placeholder='Уфа'>
          </Input>
          <Heading marginTop={"30px"} marginBottom={"10px"} size='md'>
            Ваши контактные данные
          </Heading>
          <Text marginTop={"30px"} marginBottom={"10px"}>
            Контактное лицо
          </Text>
          <Input placeholder='Имя появится в блоке с контактной информацией'>
          </Input>
          <Text marginTop={"30px"} marginBottom={"10px"}>
            Контакты
          </Text>

          <InputGroup>
            <InputLeftAddon children='+7' />
            <Input  marginBottom={"10px"} type='tel' placeholder='Номер телефона' />
          </InputGroup>


          <Input placeholder='Вконтакте' marginBottom={"10px"}>
          </Input>
          <Input placeholder='Telegram' marginBottom={"10px"}>
          </Input>
          <Input placeholder='Viber' marginBottom={"10px"}>
          </Input>
          <Input placeholder='WhatsApp' marginBottom={"10px"}>
          </Input>
          <Input placeholder='Skype' marginBottom={"10px"}>
          </Input>
        </Box>
        <Button backgroundColor={"blue.500"} textColor={"white"}>
          Опубликовать объявление
        </Button>
      </Box>
      
    </Container >

  )

}
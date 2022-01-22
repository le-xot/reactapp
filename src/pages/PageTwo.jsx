import React from 'react'
import {
  Button,
  Box,
  Container,
  Input,
  SimpleGrid,
  Checkbox,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Spacer,
  Flex
} from '@chakra-ui/react'

const PageThree = () => {
  window.location.replace("https://khairullin.vercel.app/PageThree");
}

const PageOne = () => {
  window.location.replace("https://khairullin.vercel.app/PageOne");
}

export default function PageTwo() {

  return (

    <Container maxW="7xl" padding={4}>
      <Box padding={4}>
        <Box overflow="auto" gap={6}>
          <Flex>
            <Button colorScheme='blue' marginBottom={"20px"} 
            onClick={()=> PageThree()}>
              Подать объявление
            </Button>
            <Spacer />
            <Button colorScheme='blue' marginBottom={"20px"} 
            onClick={()=> PageOne()}>
              На главную
            </Button>
          </Flex>
          <Box padding={"10px"} borderRadius={"10px"} backgroundColor={"blue.500"}>
            <SimpleGrid columns={4} spacingX={"30px"}>
              <Input placeholder="Название товара или услуги" marginBottom={"20px"} backgroundColor={"white"}>
              </Input>
              <Select placeholder="Квартиры" backgroundColor={"white"}>
                <option>Недвижимость</option>
                <option>Комнаты</option>
                <option>Коммерческая недвижимость</option>
                <option>Дома, дачи, коттеджи</option>
                <option>Земельные участки</option>
                <option>Гаражи</option>
                <option>Зарубежная недвижимость</option>
                <option>Новостройки</option>
                <option>Обмен</option>
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
              <Checkbox colorScheme='white' textColor={"white"}>
                От частных лиц
              </Checkbox>
              <Checkbox colorScheme='white' textColor={"white"}>
                От кампаний
              </Checkbox>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box padding={4}>
        <Box overflow="auto" maxW="7xl" padding={4}>
          <SimpleGrid columns={2} spacingX={"30px"}>
            <Select placeholder="Выберите категорию" backgroundColor={"white"}>
              <option>Продам</option>
              <option>Сдам</option>
              <option>Сниму</option>
              <option>Куплю</option>
              <option>Все</option>
            </Select>
            <Popover>
              <PopoverTrigger>
                <Button backgroundColor={"blue.500"} textColor={"white"}>
                  Цена
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />

                <Input placeholder='от' marginTop={"35px"} marginLeft={"15px"} width={"90%"}>
                </Input>
                <Input placeholder='до' marginTop={"10px"} marginLeft={"15px"} width={"90%"}>
                </Input>

                <PopoverBody>
                  <Button marginLeft={"4px"}>
                    Сбросить
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </SimpleGrid>
        </Box>
      </Box>
    </Container >

  )

}
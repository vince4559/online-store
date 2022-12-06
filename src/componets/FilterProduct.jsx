import {
    Drawer,
    Box,
    Button,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Radio,
    Stack,
    CheckboxGroup,
    Checkbox,
  } from '@chakra-ui/react'
import React from 'react'
import { DataProvider } from '../context/Context';
import { FILTERACTIONS } from '../context/Reducer';
import Rating from './Rating';
import { BsArrowRightCircle } from "react-icons/bs"


const FilterProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const {filterState:{byStock,byFastDelivery,byRating, sort, searchQuery},
     filterDispatch} = DataProvider();
     console.log(byStock,byFastDelivery,byRating, sort, searchQuery)
  return (
   <Box  p={1} bg={'gray.100'} >
     <Button ref={btnRef}  onClick={onOpen} colorScheme="none" color={'green'}>
        <BsArrowRightCircle /> Filter product
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter Product</DrawerHeader>

          <DrawerBody>
                <RadioGroup  >
                   <Stack mb={1}>
                   <Radio                     
                   type={'radio'}
                   name='group_1'                   
                   id='_1'
                   onChange={() => filterDispatch({
                    type: FILTERACTIONS.SORT_BY_PRICE,
                    payload: 'lowToHigh'
                   })}
                   checked={sort === 'lowToHigh'? true : false}
                   >
                    Asending
                    </Radio>
                    <Radio                   
                    id='_2'                 
                   type={'radio'}
                   name='group_2'
                   onChange={() => filterDispatch({
                    type: FILTERACTIONS.SORT_BY_PRICE,
                    payload: 'highToLow'
                   })}
                   checked={sort === 'highToLow'? true : false}
                   >
                    Desending
                    </Radio>
                   </Stack>
                   <CheckboxGroup>
                    <Stack spacing={2}>
                    <Checkbox 
                    name='group2'
                    type={'checkbox'}
                    onChange={() => filterDispatch({
                      type: FILTERACTIONS.FILTER_BY_STOCK,
                    })}
                    checked={byStock}
                    >
                      Include out of stock
                      </Checkbox>
                      <Checkbox 
                      name='group2'
                      type={'checkbox'}
                      onChange={() => filterDispatch({
                        type: FILTERACTIONS.FILTER_BY_DELIVERY,
                      })}
                      checked={byFastDelivery}
                    >
                      By Fast Delivery
                      </Checkbox>
                    </Stack>
                   </CheckboxGroup>
                </RadioGroup>
                <Box mb={3}>
                <span>Rating: 
                  <Rating 
                  onClick={(i) => filterDispatch(
                    {type:FILTERACTIONS.FILTER_BY_RATING, payload: i})} 
                  rating={byRating} 
                  style={{cursor: 'pointer'}} /> 
                </span>
                </Box>
                <Button
                  onClick={(i) => filterDispatch(
                    {type:FILTERACTIONS.CLEAR_FILTER})}
                >
                  Clear Filter
                </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
   </Box>
  )
}

export default FilterProduct

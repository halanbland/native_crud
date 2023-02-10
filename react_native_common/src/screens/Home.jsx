import React, {useState, useEffect, useRef} from "react";
import {View, Text, TextInput, Button,Pressable, StyleSheet, Modal, FlatList} from "react-native"
import { useItem } from "../hooks"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons"
import { AddInpt, AddModal, BtnM, DelModal, Row, UpdateModal} from '../commonLibrary'
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function Home() {
  const { handleCreateItems, handleGetItems, list, handleDeleteItems, handleUpdateItems } = useItem()
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const [inputUpdate, setInputUpdate] = useState({})
  const [idItem, setIdItem] = useState()
  const [deleteModal, setDeleteModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  useEffect(() => {
    handleGetItems()
  }, [])
  useEffect(() => {
    setData(list)
  }, [list])

  React.createElement(
    "h1",
    {className: 'sss'},
    "hello"
  )

  return (
    <View >

      <Modal name = 'deleteModal' visible = {deleteModal}
      >
        <DelModal>
          <Text style = {{color: 'white'}}>Xóa item khỏi danh sách?</Text>
          <Row>
            <BtnM
                onPress = {() => {
                  handleDeleteItems(idItem)
                  setDeleteModal(!deleteModal)
                  
                }}>
                Delete
            </BtnM>
            <BtnM
            onPress = {() => {
              setDeleteModal(!deleteModal)
            }}
            >
              Cancel
            </BtnM>
          </Row>
            
        </DelModal>
      </Modal>
      
      <Modal name = 'addModal' visible = {addModal}>
        <AddModal>
          <AddInpt
            value={input}
            onChangeText={setInput}
          />
          <Row>
            <BtnM
              onPress={() => {
                handleCreateItems(input)
                setInput('')
                setAddModal(!addModal)
              }}
            >
              Add
            </BtnM>
            <BtnM onPress = {() => setAddModal(!addModal)} >Cancel</BtnM>
          </Row>
        </AddModal>
      </Modal>

      <Modal name = 'updateModal' visible = {updateModal}>
            <UpdateModal>
              <AddInpt
                onChangeText={(e) => {setInputUpdate({...inputUpdate, name : e})}}
                value={inputUpdate.name ?? ''}
              />
              <Row>
                <BtnM
                  onPress={() => {
                    handleUpdateItems(inputUpdate)
                    setInputUpdate('')
                    setUpdateModal(!updateModal)
                  }}
                >
                  Update
                </BtnM>
                <BtnM onPress = {() => setUpdateModal(!updateModal)} >Cancel</BtnM>
              </Row>
            </UpdateModal>
      </Modal>

      
      <BtnM
        onPress = {() => setAddModal(!addModal)}          
      >
        Add
      </BtnM>
                  {console.log(data, 'dataaaaaaa')}
      <View style = {{
        width: "90%",
        borderWidth: 1,
        margin: "auto"
      }}>
        <View style = {{
          flexDirection: "row",
          justifyContent: "space-around",
          borderBottomColor: "black",
          borderBottomWidth: 1
        }}>
          <Text>Name</Text>
          <Text>Action</Text>
        </View>
        <FlatList
        data={data}
        keyExtractor = {item => item.id}
        renderItem = {({item}) => (
        <View 
        style = {{
          flexDirection: "row",
         justifyContent: "space-around", 
         textAlign: 'center'
        }}
        >
          <Text style = {{flex: 1}}>{item.name}</Text>

          <View style = {{
          flexDirection: "row",
         justifyContent: "center",
         flex: 1,
         gap: 2
        }}>
            <Icon name = "delete" color= "#1C82AD" size = {24} 
                onPress={() => {
                  setDeleteModal(!deleteModal)
                  setIdItem(item.id)
                }}
              />
              <Icon name="pencil" color="#1C82AD" size={24} 
              onPress={() => {
                setUpdateModal(!updateModal)
                setInputUpdate({id: item.id, name: item.name})
              }}
              />
            </View>
              
              
        </View>
      )}
    />
          
      </View>
        
      
         
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  
})

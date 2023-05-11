import { View, Text, FlatList, Button , Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import { API_QUANLI } from './API';

const Quanli = (props) => {
  const [listdata , setlistdata] = useState([]);
  const [isloading , setisloading] = useState(true);
  const{navigation:nav} = props; 
   const isFocused = useIsFocused();
   const getdata=()=>{
    fetch(API_QUANLI)
    .then(res=>res.json())
    .then(data=>{
      setlistdata(data)
      setisloading(false);
    })
   }
   useEffect(()=>{
    getdata
   } , [isFocused]);
   const editData=(editId)=>{
      fetch(`${API_QUANLI}/${editId}`)
      .then(res => res.json())
      .then(data => nav.navigate('Them moi' , {editdata:data}))
   }
   const deleteData=(deleteID)=>{
    fetch(`${API_QUANLI}/${deleteID}` , {method:'DELETE'})
    .then(res=>getdata());

   }
  return (
    <View>
        <Pressable onPress={() => nav.navigate('Them moi')}><Text style={{ color: 'red' }}>Them Moi</Text></Pressable>
        {
            isloading?<Text>loading....</Text>:
           <View>
             <FlatList data={listdata} 
            renderItem={({item})=><View>
            <Text>{item.name}</Text>
            <Text>{item.tuoi}</Text>
            <Pressable onPress={() => { editData(item.id) }}><Text>sua</Text></Pressable>
                  <Pressable onPress={() => deleteData(item.id)}><Text>xoa</Text></Pressable>
    
          </View>

          } keyExtractor = {(item)=>item.id}></FlatList>
           </View>
        }
      
    </View>
  )
}

export default Quanli

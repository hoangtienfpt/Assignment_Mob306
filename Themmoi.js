import { View, Text , Button ,TextInput} from 'react-native'
import React , {useState , useEffect } from 'react'
import { API_QUANLI } from './API';


const Themmoi = (props) => {
  const {navigation:nav  , route} = props;
    const editData = route.params?.editdata;
    const [name  , setname] = useState('');
    const[tuoi, settuoi] = useState('');

    useEffect(() => {
        if ((editData)) {
          setname(editData.name);
          settuoi(editData.tuoi);
     
        }
      }, [editData?.id]);

    const onSave = ()=>{
      const newObj = {name , tuoi}
      fetch(!editData?API_QUANLI:`${API_QUANLI}/${editData.id}` , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method:!editData?'POST' :'PUT',
        body:JSON.stringify(newObj)
      }).then(res=>{nav.goBack()})

    }
     
  return (
    <View>
    
        <TextInput placeholder='Name' value={name} onChangeText={(text) => setname(text)} />
        <TextInput placeholder='age' value={tuoi} onChangeText={(text) => settuoi (text)} />
        <Button title='lưu' onPress={() => onSave()} />
    </View>
  )
}

export default Themmoi
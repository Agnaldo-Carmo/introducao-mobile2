import * as React from 'react';
import {useState} from 'react';
import {Animated, View} from 'react-native';
import Botao from "../Botao";
import Estilo from "../Estilo";
import {tamanhos} from "../tamanhos";


const Home = ({navigation}) => {

    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 5000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAltura,
        duration: 5000,
    }).start();

    Animated.spring(fonte, {
        toValue: tamanhos.padraoGrande,
        speed: 10,
        bounciness: 30,
    }).start();

    return (

        <View>
            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}> Seja Bem-vindo ao FlightBank! </Animated.Text>
            <Animated.Image source={require("../../../assets/cashwithwingsemoji.png")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: 'gray'}}
            />

            <Botao
                color="blue"
                title="Ajuda"
                action={() => navigation.navigate("Ajuda")}

            />
        </View>
    );
}

export default Home;


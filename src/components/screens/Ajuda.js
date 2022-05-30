import * as React from 'react';
import {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import Botao from "../Botao";
import {tamanhos} from "../tamanhos";
import Estilo from "../Estilo";


const Ajuda = ({navigation, route}) => {
    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.padraoGrande,
        speed: 10,
        bounciness: 30,
    }).start();

    return (

        <View>

            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}> Pagina de Ajuda </Animated.Text>

            <Text style={[Estilo.text, {fontSize: 16}]}>Endereço: Close to nowhere</Text>

            <Text style={[Estilo.text, {fontSize: 16}]}>
                Horário de funcionamento: 08:00 - 14:00 hrs
            </Text>

            <Text style={[Estilo.text, {fontSize: 16}]}>
                Funciona apenas de segunda a sexta!
            </Text>

            <Text style={[Estilo.text, {fontSize: 16}]}>
                Número para contato: (32)123456789.
            </Text>

            <Botao
                colo="blue"
                title="Voltar"
                action={() => navigation.goBack()}
            />
        </View>
    );
}

export default Ajuda;


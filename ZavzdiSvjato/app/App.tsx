import { ScrollView } from 'react-native';

import Header from '../components/Header/Header';
import CustomButton from '../components/CustomButton/CustomButton';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import FooterNav from '../components/FooterNav/FooterNav';
import HomeList from "../components/HomeList/HomeList";
import OptionList from '../components/OptionList/OptionList';

//import WelcomeScreen from "../screens/WelcomeScreen";

const SHOW_COMPONENT = //'HomeList';
'OptionList';
//'CategoryCard';
  //'Header';
  //'CustomButton';
//'FooterNav';
   

export default function App() {
  return (
    <ScrollView>
          {/* {SHOW_COMPONENT === 'Header' && (
        <Header title1="Вітаємо, Гість" title2="Яке свято Вас цікавить?" />)} */}

        {/* {SHOW_COMPONENT === 'CustomButton' && (
        <CustomButton title="Увійти" />
        )} */}
        
        {/* {SHOW_COMPONENT === 'CategoryCard' && (
        <CategoryCard
                  image={require('../assets/images/birthday.jpg')}
                  title="День народження"
        />
        )} */}

        {/* {SHOW_COMPONENT === 'FooterNav' && (
            <FooterNav />)} */}
          
        {/* {SHOW_COMPONENT === 'HomeList' && (
        <HomeList />)} */}
      
      {SHOW_COMPONENT === 'OptionList' && (
        <OptionList />)}
    </ScrollView>
  );
}
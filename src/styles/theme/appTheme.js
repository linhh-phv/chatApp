import Sizes from '../Size';

const colors = {
  colorSelected: '#335290',
  colorNoSelect: '#9DA3B4',

  //backgroundApp: '#fff',
  // colorTextApp: '#335272',

  //background header
  backgroundHeaderApp: '#F7931B',
  colorWhiteText: '#fff',
  colorTextApp: '#262626',
  colorIconApp: '#262626',

  colorError: '#F5222D',
  colorOpacity: '',

  colorButtonApp: '#fff',
  backgroundApp: '#E5E5E5',
  colorText: '#37526D',
  colorBlue: '#276EF1',

  itemColor: '#fdfdfd',
  hightLightText: '#FFCE5D',
  error: '#D44333',
};

const fonts = {
  // Default app
  textDefault: Sizes.h28,
  textDefaultApp: Sizes.h28,
  //List button
  textListButton: Sizes.h80,

  // Tab Screen
  textTitleTab: Sizes.h30,
  iconTitlteTab: Sizes.h42,

  textTitleButton: Sizes.h32,
  // textTitleInfoTask: Sizes.h26,
  paddingHorizontalView: Sizes.s20,
  // textID
  textID: Sizes.h28,
  //text Title
  textTitle: Sizes.s35,
  // text co`n la.i + so phan tram %
  textContent: Sizes.h28,
  // view bao ben trong  Item
  marginVerticalViewInItem: Sizes.s10,
  marginHorizontalViewInItem: Sizes.s20,

  //View bao ben ngoai item
  marginHorizontalViewitem: Sizes.s30,
  marginVerticalViewitem: Sizes.s15,

  ///view Tung dong item
  marginHorizontalItem: Sizes.s5,
  marginVerticalItem: Sizes.s7,
  // View Title
  marginLeftTitle: Sizes.s10,
  marginVerticalTitle: Sizes.s5,
};
const dataColorTags = {
  dataColor: [
    {id: '0', value: '#388e3c', name: 'dark-green', selected: false},
    {id: '1', value: '#fb3', name: 'warning', selected: false},
    {id: '2', value: '#f57c00', name: 'orange', selected: false},
    {id: '3', value: '#ff3547', name: 'danger', selected: false},
    {id: '4', value: '#512da8', name: 'deep-purple', selected: false},
    {id: '5', value: '#4285f4', name: 'primary', selected: false},
    {id: '6', value: '#33b5e5', name: 'info', selected: false},
    {id: '7', value: '#8bc34a', name: 'light-green', selected: false},
    {id: '8', value: '#ec407a', name: 'pink', selected: false},
    {id: '9', value: '#2e2e2e', name: 'elegant', selected: false},
  ],
};

export {colors, fonts, dataColorTags};

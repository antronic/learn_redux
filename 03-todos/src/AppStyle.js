import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'outline': '0'
  },
  'html': {
    'backgroundColor': '#dbdde5'
  },
  'body': {
    'backgroundColor': '#dbdde5'
  },
  '#root': {
    'backgroundColor': '#dbdde5'
  },
  '#title': {
    'marginTop': [{ 'unit': 'em', 'value': 2 }]
  },
  '#title h1': {
    'fontWeight': '300',
    'color': '#333',
    'fontSize': [{ 'unit': 'em', 'value': 3.5 }]
  },
  'todo-box': {
    'marginTop': [{ 'unit': 'em', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0 }],
    'backgroundColor': '#fafafe',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#adadb3' }]
  },
  '#todo-list': {
    'marginTop': [{ 'unit': 'em', 'value': 0.5 }]
  },
  '#todo-list todo': {
    'cursor': 'pointer'
  },
  '#todo-list todo p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#93939a' }]
  },
  '#todo-list todo pcompleted': {
    'textDecoration': 'line-through',
    'color': '#bbb'
  },
  '#filter': {
    'marginTop': [{ 'unit': 'em', 'value': 1 }]
  },
  '#filter filter-link': {
    'cursor': 'pointer',
    'padding': [{ 'unit': 'em', 'value': 0.15 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.15 }, { 'unit': 'em', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.05 }],
    'borderRadius': '30px'
  },
  '#filter filter-link:hover': {
    'backgroundColor': '#93939a',
    'color': '#fff'
  },
  '#filter filter-linkactive': {
    'backgroundColor': '#fb3f6b',
    'color': '#fff'
  },
  '#filter filter-link + filter-link': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.5 }]
  }
});

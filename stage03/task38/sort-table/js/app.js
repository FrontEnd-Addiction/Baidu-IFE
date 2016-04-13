const table = new Table({
  data: [
    ['Make', 'Modal', 'Year'],
    ['Honda', 'Accord', '2009'],
    ['Yyundai', 'Elantra', '2010'],
    ['Toyota', 'Camry', '2012'],
    ['Ford', 'Focus', '2015']
  ],
  root: document.querySelector('main'),
  theme: 'striped',
  sortable: false
})

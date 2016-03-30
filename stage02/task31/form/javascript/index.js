var isStudentLi = document.querySelector('#isStudent'),
    locationSchoolLi = document.querySelector('#location-school'),
    companyLi = document.querySelector('#company'),
    locationListUl = document.querySelector('.locationList'),
    schoolsListUl = document.querySelector('.schoolsList');
    
isStudentLi.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement,
      isStudent = true;
  if (target.tagName.toLowerCase() ==='input') {
    isStudentToggle(target.value);
  }
}, false);

locationSchoolLi.addEventListener('focus', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  
  if (target.name === 'location') {
    locationList();
  } else {
    schoolsList()
  }
}, true);

locationListUl.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  
  if (target.tagName.toLowerCase() === 'li') {
    document.querySelector('input[name="location"]').value = target.innerHTML;
    document.querySelector('input[name="school"]').value = '';
    locationListUl.innerHTML = '';
    locationListUl.style.display = 'none';
  }
}, true);

schoolsListUl.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  
  if (target.tagName.toLowerCase() === 'li') {
    document.querySelector('input[name="school"]').value = target.innerHTML;
    schoolsListUl.innerHTML = '';
    schoolsListUl.style.display = 'none';
  }
}, false);

function isStudentToggle (isStudent) {
  if (isStudent === 'true') {
    locationSchoolLi.style.display = 'block';
    companyLi.style.display = 'none';
  } else {
    locationSchoolLi.style.display = 'none';
    companyLi.style.display = 'block';
  }
}

function locationList () {
  schoolsListUl.innerHTML = '';
  schoolsListUl.style.display = 'none';

  var fragment = document.createDocumentFragment(),
      i;
  
  locationListUl.innerHTML = '';
  
  for (i = 0; i < school.length; i++) {
    var li = document.createElement('li');
    li.innerText = school[i].location;
    fragment.appendChild(li);
  }
  locationListUl.appendChild(fragment);
  locationListUl.style.display = 'block';
}

function schoolsList () {
  locationListUl.innerHTML = '';
  locationListUl.style.display = 'none';

  var fragment = document.createDocumentFragment(),
      location = document.querySelector('input[name="location"]').value,
      schoolsArr = school.filter(function (obj) {
        return obj.location === location;
      }),
      i;
  
  var schoolsArr = schoolsArr.length === 0 ? [] : schoolsArr[0].schools;
  
  schoolsListUl.innerHTML = '';
  
  for (i = 0; i < schoolsArr.length; i++) {
    var li = document.createElement('li');
    li.innerText = schoolsArr[i];
    fragment.appendChild(li);
  }
  schoolsListUl.appendChild(fragment);
  schoolsListUl.style.display = 'block';
}

Main files:
    components/groups.component.ts
    components/students.component.ts
    components/table.component.ts
    service/main.service.ts (backend)
1) app using 2 pages for 2 routes: "" and "students"
2) app saves database state on reload page and redirect to other route using localStorage
3) app sends parameters to students-route to render template and child table-component specific way. 
4) you can reset database to initial preset state.(which is not empty, but filled with test values)
   "" route -> groups.component -> table.component -> "students" route  
             ^\            ^\v               v/^             |
                 \             main.service                  |
                      \   v/^                 ^\v            V
             table.component <- students.component <- "students" route


Основные файлы:
    components/groups.component.ts
    components/students.component.ts
    components/table.component.ts
    service/main.service.ts (backend)
1) приложение использует 2 url отрисовывая два компонента: "" and "students"
2) приложение сохраняет состояние базы данных при перезагрузки странице и переходах на другие страницы при исользуя localStorage в сервисе бекенда.
3) приложение переходит на другие url вместе с параметрами, чтобы отрендерить шаблон и дочерний компонент по разному.
4) Вы можете сбросить состояние базы данных до изначальной (которое не пустое, а заполнено тестовыми данными)
Примерная схема (компонент table вызывает дважды с разными параметрами)
   "" route -> groups.component -> table.component -> "students" route  
             ^\            ^\v               v/^             |
                 \             main.service                  |
                      \   v/^                 ^\v            V
             table.component <- students.component <- "students" route


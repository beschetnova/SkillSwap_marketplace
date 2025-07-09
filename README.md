# SkillSwap project

[Техническое задание](https://docs.google.com/document/d/1CAK44JRaTrUiLBlqDPwc5iC7D4EJfKw7pU1ZAJwyMGU/edit?usp=sharing)

[Макет](https://www.figma.com/design/bKwOakHJI7Z2mh2zVCBphP/SkillSwap---%D0%94%D0%BB%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%BE%D0%B2?node-id=0-1&p=f&t=JFqHmCC49wG9GxkC-0)

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run dev
```

Открывается через порт http://localhost:5173

### Сборка

```
npm run build
```

Превью (запускать только после build)

```
npm run preview
```

### Форматирование

В проекте установлен Husky + lint-staged. Для работы нужно ввести единожды

```
npm run prepare
```

prettier

```
npm run format
```

eslint

```
npm run lint
```

stylelint

```
npm run lint:css
```

stylelint fix

```
npm run lint:css:fix
```

## Структура проекта

[Главный файл index](index.html)

[Главный компонент приложения App с роутингом](src/App.tsx)

```
skillswap_31_1
├──puplic/                        #Статичесике файлы, доступные напрямую
│  └──db/                         #Здесь должны лежать файлы которые мы мокаем из сервера .json файлы
├──src/                           #Исходный код приложения
│  ├──api/                        #Методы работы с мок-JSON (fetch)
│  ├──components/                 #React компоненты (прикладной слой)
│  │  ├──example/                 #Пример структуры реакт компонента
│  │  │  ├──example.module.css    #Модуль со стилями
│  │  │  ├──example.stories.tsx   #Файл Stories для тестирования отображения
│  │  │  └── example.tsx          #Код React компонента
│  │  └──ui/                      #UI компоненты (слой отображения)
│  ├──images/                     #Изображения
│  ├──pages/                      #Отдельные страницы приложения
│  ├──services/                   #Стор и слайсы (доменный слой)
│  ├──utils/                      #Утилиты, дополнительные методы и типы
│  ├──hooks/                      #Кастомные хуки
│  └──routes/                     #Настройка роутинга в приложении
├──app.tsx                        #Основной файл приложения
├──index.css                      #Общие стили приложения
├──main.tsx                       #Точка входа (рендер React в DOM)
```

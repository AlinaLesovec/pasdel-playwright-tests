# Pasdel Playwright Tests

Автоматизированные E2E тесты для веб-приложения https://pre.pasdel.ru  
Проект выполнен в рамках экзамена Hexlet.

---

## 📌 Что покрыто тестами

### ✅ Стартовая страница
- snapshot-тест главной страницы
- проверка визуальных изменений интерфейса

### ✅ Регистрация пользователя
- успешная регистрация
- проверка ошибок при некорректных данных

### ✅ Авторизация
- успешный вход
- ошибка при неверных данных

---

## 🧰 Используемые технологии

- Playwright
- Allure Reporter
- Node.js
- GitHub CI

---

## 📁 Структура проекта

playwright.config.js  
package.json  
tests/  
 home.spec.js  
 register.spec.js  
 login.spec.js  

---

## 🚀 Запуск тестов

Установка зависимостей:

npm install

Запуск тестов:

npx playwright test

---

## 📊 Просмотр отчёта Allure

После выполнения тестов:

npx allure generate allure-results -o allure-report  
npx allure open allure-report

---

## 🎯 Цель проекта

Практика автоматизации тестирования веб-приложений:
- написание UI тестов
- работа со snapshot тестированием
- интеграция отчётности
- организация тестового проекта

---

## 👤 Автор

Студент Hexlet  
QA Automation

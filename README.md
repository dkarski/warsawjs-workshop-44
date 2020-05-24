# warsawjs-workshop-44

📁 WarsawJS Workshop #44 — Design Patterns

## Demo 🎉

<https://dkarski.github.io/warsawjs-workshop-44>


## Slides - live

  - <https://slides.com/danielkarski/wzorce-projektowe/live>


## Agenda

 1. Wprowadzenie do wzorców projektowych
 1. [Wzorzec obserwator - operacyjny](https://refactoring.guru/design-patterns/observer)
 1. [Wzorzec faktory - kreacyjny](http://krzysztofjelonek.net/wzorce-projektowe-fabryki)
 1. [Wzorzec strategia - operacyjny](https://refactoring.guru/design-patterns/strategy)
 1. [Wzorzec fasada - strukturalny](https://refactoring.guru/design-patterns/facade)


## Sources

 - [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
 - [Addy Osmani - JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript)
 - [Wzorce projektowe, czyli zasady dobrego programowania](http://www.blog.molitorys.pl/wzorce-projektowe-czyli-zasady-dobrego-programowania)
 - [Design Patterns (Wzorce Projektowe)](https://observablehq.com/@ahilles107/design-patterns-wzorce-projektowe)
 - [All the 23 (GoF) design patterns implemented in Javascript](https://github.com/fbeline/design-patterns-JS)
 - [33 concpets in JavaScript - Design Patterns](https://github.com/leonardomso/33-js-concepts#31-design-patterns)


## Postman API documentation
  - https://documenter.getpostman.com/view/2154709/Szt8e9vx?version=latest
 
 
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://dkarski.github.io/warsawjs-workshop-44/issues/).


## Show your support

Give a ⭐️ if this project helped you!  


## Zadania


### 1. Zaimplementuj wzorzec [obserwator](https://refactoring.guru/design-patterns/observer)


#### Problem 

Renderowanie aplikacji nie jest jawnie sprężone ze zmianą stanu aplikacji.


#### Opis

Przerenderowywanie całej aplikacji występuje, gdy zostaje wywoływana funkcja render przekazywana z głównego komponentu 
[app](./src/app/app.js) do niższych komponentów. Zauważ, że komponenty wołają funkcje render, przy każdej aktualizacji 
głównego stanu apliakcji za pomocą obiektu [store](./src/store/store.js). 

   
#### Zadanie

Spraw by w głównym miejscu inicjalizacji komponentu [app](./src/app/app.js), czyli w pliku [bootstrap.js](./src/bootstrap.js)
aplikacja nasłuchiwała na zmianę stanu w obiekcie [store](./src/store/store.js), by wywołać metodę render głównego komponentu
[app](./src/app/app.js). 


#### Wskazówki

1. Wykorzystaj do przypięcia subkrypcji na zmianę stanu wzorzec [obserwator](https://refactoring.guru/design-patterns/observer).
1. Interfejs klasy _Subject_ zaimplementować bezpośrednio dla klasy [store](./src/store/store.js) lub utworzyć osobną klasę implementującą 
interfejs _Subject_ ze wzorca [obserwator](https://refactoring.guru/design-patterns/observer).
1. Pozbadź się zbędnych wywołań funkcji `renderApplication` w aplikacji.


### 2. Zaimplementuj wzorzec [prosta fabryka](http://krzysztofjelonek.net/wzorce-projektowe-fabryki)


#### Problem 

Funkcja zwrotna [handleButtonPrimaryClick](./src/app/create-tag-modal/create-tag-modal.js#L29), która jest przekazywana w funkcji nasłuchującej dla przycisku `Create` w komponencie [CreateTagModal](./src/app/create-tag-modal/create-tag-modal.js) nie jest zamknięta na modyfikację.


#### Opis

[CreateTagModal](./src/app/create-tag-modal/create-tag-modal.js) component pozwala na utworzenie unikalnego tagu. Formularz
posiada pole do wpisania nazwy tagu oraz zamkniętą liste pre definiowanych ikon, które można przypisać tworzonemu tagowi.
Utworzenie tagu sprawi, że będzie on widoczny w panelu bocznym wraz z pozostałymi tagami. Lista utworzonych tagów jest, także widoczna
w szczegółowym widoku pliku.

Aktualnie [handleButtonPrimaryClick](./src/app/create-tag-modal/create-tag-modal.js#L29) jest odpowiedzialny między innymi za 
gromadzenie różnych pochodnych od siebie obiektów typu `Tag`. Dodanie nowego pochodnego typu `Tag` spowoduje, że funkcja zwrotna 
będzie musiała zostać zmodyfikowana. Kolejny problem jest taki, że nie można wykorzystać logiki związanej z tworzeniem obektu `Tag` 
w innych miejscach aplikacji.
   
   
#### Zadanie

Wyodrębnij tworzenie obiektu typu `Tag` do osobnego pliku. Zwróć w funkcji zwrotnej [handleButtonPrimaryClick](./src/app/create-tag-modal/create-tag-modal.js#L29) 
instancje obiektu pod typu `Tag` na podstawie przekazywanego typu taga.


#### Wskazówki

1. Wykorzystaj w zadaniu wzorzec kreacyjny - [prosta fabryka](http://krzysztofjelonek.net/wzorce-projektowe-fabryki).


### 3. Zaimplementuj wzorzec [prosta fabryka](http://krzysztofjelonek.net/wzorce-projektowe-fabryki)


#### Problem 

Funkcja [addFile](./src/app/file-manager/upload-file/upload-file.js#L19) w komponencie [UploadFile](./src/app/file-manager/upload-file/upload-file.js) nie jest zamknięta na modyfikację.


#### Opis

[UploadFile](./src/app/file-manager/upload-file/upload-file.js) to bardzo prosty komponent, który wyświetla przycisk
umożliwiający wgranie pliku do aplikacji. Funkcja [addFile](./src/app/file-manager/upload-file/upload-file.js#L19) jest 
wywoływywana, gdy użytkownik doda plik za pomocą przeglądarki.

Aktualnie [addFile](./src/app/file-manager/upload-file/upload-file.js#L19) jest odpowiedzialny między innymi za 
gromadzenie różnych pochodnych od siebie obiektów typu `File`. Dodanie nowego pochodnego typu `File` spowoduje, że funkcja 
będzie musiała zostać zmodyfikowana. Kolejny problemem jest taki, że nie można wykorzystać logiki związanej z tworzeniem obektu `File` 
w innych miejscach aplikacji.
   
   
#### Zadanie

Wyodrębnij tworzenie obiektu typu `File` do osobnego pliku. Zwróć w funkcji [addFile](./src/app/file-manager/upload-file/upload-file.js#L19) 
instancje obiektu pod typu `File` na podstawie przekazywanego typu pliku.


#### Wskazówki

1. Wykorzystaj w zadaniu wzorzec kreacyjny - [prosta fabryka](http://krzysztofjelonek.net/wzorce-projektowe-fabryki).
1. Obsłuż niezdefiniowany typ `File` tak, by zwracał jakiś domyślny pod typ typu `File`.  


### 4. Zaimplementuj wzorzec [strategia](https://refactoring.guru/design-patterns/strategy)


#### Problem 

Funkcja [generateHTMLString](./src/app/file-manager/file-list/file-list.js#L18) w komponencie [FileList](./src/app/file-manager/file-list/file-list.js) nie jest zamknięta na modyfikację.


#### Opis

Aplikacja wyświetla pliki w różnych formach. Aktualnie użytkownik może wyświetlić pliki z dużymi ikonami, małymi bądź 
w formie tabeli. 

Funkcja [generateHTMLString](./src/app/file-manager/file-list/file-list.js#L18) jest odpowiedzialna między innymi za 
gromadzenie różnych form kreaowania szablonu. Dodanie nowej formy kreaowania szablonu w komponencie [FileList](./src/app/file-manager/file-list/file-list.js) 
spowoduje, że funkcja będzie musiała zostać zmodyfikowana. 
   
   
#### Zadanie

Wyodrębnij formy kreowania szablonu w komponencie [FileList](./src/app/file-manager/file-list/file-list.js) do osobnego pliku. 
Zwróć w funkcji [generateHTMLString](./src/app/file-manager/file-list/file-list.js#L18) odpowiednią funkcje, która zostanie
wywołana na podstawie wybranej formy wyświetlania listy plików.


#### Wskazówki

1. Wykorzystaj w zadaniu wzorzec operacyjny - [strategia](https://refactoring.guru/design-patterns/strategy).


### 5. Zaimplementuj wzorzec [strategia](https://refactoring.guru/design-patterns/strategy)


#### Problem 

Funkcja [render](./src/app/file-manager/file-list/file-list.js#L79) w komponencie [FileList](./src/app/file-manager/file-list/file-list.js) 
nie jest zamknięta na modyfikację.


#### Opis

Aplikacja pozwala wyświetlić pliki po sortowane według wybranej formy. Aktualnie użytkownik może sortować pliki po nazwie 
i typie pliku. ⚠️ *Nie można sortować po dacie utworzenia*

Funkcja [render](./src/app/file-manager/file-list/file-list.js#L79) jest odpowiedzialna między innymi za 
gromadzenie i tworzenie różnych form sortowania plików. Dodanie nowej formy sortowania w komponencie [FileList](./src/app/file-manager/file-list/file-list.js) 
spowoduje, że funkcja będzie musiała zostać zmodyfikowana. 
   
   
#### Zadanie

Wyodrębnij formy sortowania plików do osobnego pliku. Zwróć w funkcji [render](./src/app/file-manager/file-list/file-list.js#L79) 
odpowiednią funkcje, która zostanie wywołana na podstawie wybranej formy sortowania listy plików.


#### Wskazówki

1. Wykorzystaj w zadaniu wzorzec operacyjny - [strategia](https://refactoring.guru/design-patterns/strategy).



### 6. Zaimplementuj wzorzec [fasada](https://refactoring.guru/design-patterns/facade)


#### Problem 

[FileService](./src/services/file-service.js) oraz [TagService](./src/services/tag-service.js) odpowiedzialne za komunikację 
z serwerem korzystają bezpośrednio z fetch API.


#### Opis

Fetch API zwraca wygodny interfjs, do komunikacji z serwerem za pomocą HTTP. Sama wybrana forma komunikacji czy klient nie
stanowi problemu. Chcemy dla potrzeb warsztatu jedynie opakować fetch API do osobnej funkcji, by pozowlić w ramach rozwoju 
aplikacji na wygodną wymianę fetch API na innego klienta np. [axios](https://github.com/axios/axios). 
   
   
#### Zadanie

Zbuduj i wstrzyknij do [FileService](./src/services/file-service.js) oraz [TagService](./src/services/tag-service.js) obiekt, 
który udostępni interfejs do komunikacji z serwerem.


#### Wskazówki

1. Wykorzystaj w zadaniu wzorzec strukturalny - [fasada](https://refactoring.guru/design-patterns/facade)

#### Powodzenia! 💪

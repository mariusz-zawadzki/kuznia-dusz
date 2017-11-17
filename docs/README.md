# Kuźnia dusz założenia
## Pomysł i pierwotny plan
Pomysł pojawił się po ostatnim Flambergu gdzie zabrakło pewnych informacji dla duchów opiekuńczych.
Na samym początku aplikacja miała być prostą listą postaci, przedmiotów, mocy i ich ścisłych definicji na grze, 
żeby duch opiekuńczy/MG miał pełne informacje co i jak. Do postaci i przedmiotów miały być dołączone zdjęcia. Aplikacja miała działać offline.
Tyle.

Przy tworzeniu pierwszego szkicu, kilku rozmowach, zebraniu "podstawowych" wymagań pojawiły się nowe wymagania i problemy :
- kto i jak ma uzupełnić te dane widoczne w aplikacji?
- co w przypadku zmian w trakcie konwentu (nowe postacie, zmiany, efekty działań graczy itp)?
- potrzeba powiązania postaci w grupy
- widok skrócony dla MG
- generowanie okulnika dla postaci
- generowanie okulnika dla MG
- czy dało by się zrobić czytanie/generowanie QR code'ów
- import z innych źródeł: word, confluence itp

To znacznie przerosło pierwotne założenia, choć dalej jest wykonalne (większość jest raczej opcjonalna do działania aplikacji, 
lub może zostać dodana do już działającej wersji).

Teraz to czego mnie brakuje czyli jakie jest zapotrzebowanie.

## Plan minimum na tę chwilę, czyli co na 99% zrobię.

1. Interfejs webowy do tworzenia i podglądu scenariusz
    1. wymaga uwierzytelnienia (logowanie)
    1. osoba może być: 
        1. twórcą gry (właściciel gry i jej elementów, edycja, usuwanie) 
        1. mistrzem gry (podgląd gry i jej elementów)
        1. postaciami w grze (podgląd tych postaci i ich elementów)
    1. tworzenie, edycja i usuwanie gier i elementów
    1. wyszukiwanie poszczególnych elementów i gier
    1. eksport gier i elementów do wydruku, rozesłania graczom
    1. element gry to:
        1. postać
            - nazwa
            - opis
        1. przedmiot
            - nazwa
            - opis
            - zdjęcie
1. Interfejs mobilny (android) przeglądania scenariusz
    1. wymaga uwierzytelnienia (logowanie)
    1. tylko dla twórców i MG
    1. synchronizuje się z wersją webową
    1. możliwość wyszukiwania


## Czego potrzebuję.

1. Informacji zwrotnej co do interfejsu (kijowo robię interfejsy dla ludzi)
    - informacji zwrotnej: idzie dobrze, idzie kijowo, ten przycisk zapisz to powinien być też u góry z prawiej itp
    - chętnie przyjmę też pomoc w stworzeniu ładnego i funkcjonalnego interfejsu
1. Pomocy w zebraniu wymagań, czyli tak na prawdę
   - czy apliakcja będzie użytaczna
   - co i w jakiej postaci można jeszcze do niej dodać
1. Pomocy w testowaniu aplikacji


## Pomocne linki:

1. Aktualna wersja aplikacji
   - https://kuznia-dusz.firebaseapp.com
1. Issue tracker (zgłąszanie pomysłów, nowych finkcjonalności, bugów itp)
   - oglądać może każdy, zgłaszać i zamykać tylko członkowie zespołu (jestem otwarty na współpracownikó)
   - https://www.pivotaltracker.com/n/projects/2104884
1. Źródła aplikacji (czyli wszsytko co potrzebe żeby ją uruchomić samemu)
   - WEB: https://github.com/mariusz-zawadzki/kuznia-dusz
   - Android: w fazie projektowej ;-)

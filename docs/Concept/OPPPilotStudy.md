---
authors: Buzz
name: Buzz
title: "物件導向基本概念 - 初探"
tags: [OOP, Inheritance, Python, Pilot Study]
---

# 物件導向基本概念 - 初探

> 這邊以 Python 程式語言來敘述每個舉例。

當我們在生活中設計和製造物品時，往往會將它們看作是一個物件，這個物件有自己的屬性和行為，這正是物件導向的基本概念。以製作汽車為例：

首先，我們需要知道汽車有哪些屬性，例如顏色、品牌、型號、車牌等等。這些屬性在 Python 中可以使用變數來表示，例如：

```python showLineNumbers
color = "blue"
brand = "Toyota"
model = "Corolla"
license_plate = "ABC-1234"
```

接下來，我們需要知道汽車有哪些行為，例如加速、減速、煞車、換檔等等。這些行為在 Python 中可以使用函數或方法(function)來表示，例如：

```python showLineNumbers
def accelerate():
    # 增加汽車的速度
    pass

def brake():
    # 減少汽車的速度
    pass

def shift_gear():
    # 換檔
    pass
def drive(self):
    # 開車的行為函式
    pass
```

現在，我們可以將這些屬性和行為封裝成一個名為 Car 的類別。一個類別(Class)可以看作是一個模板，它描述了一個物件的屬性和行為。

```python showLineNumbers
class Car:
    def __init__(self, color, brand, model, license_plate):
        self.color = color
        self.brand = brand
        self.model = model
        self.license_plate = license_plate
        self.speed = 0

    def accelerate(self):
        self.speed += 10

    def brake(self):
        self.speed -= 10

    def shift_gear(self):
        # 省略換檔的實現
        pass

     def drive(self):
        print(f"{self.color}的{self.brand}正在行駛中...")
```

現在，我們可以使用這個類別(Class)來建立一個汽車物件。這個物件就是" Car "類別(Class)的實作或者說是實例(instance)，它擁有類別(Class)所有描述的屬性和行為。

ps.再白話一點說就是我們把 Car 這個類別當成設計稿，丟給雷雕機去雷雕出來，那雷雕出來的這個產物就是
car，它就是根據 Car 這個設計稿製作出來的物件，也就是上面說的實例。

```python showLineNumbers

car = Car("blue", "Toyota", "Corolla", "ABC-1234")

```

現在，我們可以使用這個汽車的物件來調用它的行為。

```python showLineNumbers
car.accelerate()  # 加速
car.brake()       # 煞車
car.shift_gear()  # 換檔
car.drive()      # 開車行駛
```

這就是物件導向的基本概念，通過封裝屬性和行為，我們可以建立可重複使用的程式碼，更方便地進行程式碼及專案的維護和擴展。

:::tip
看到這邊如果你都懂其實物件導向的概念你已經了解好一大半了
帶著你上面理解的物件導向類別和物件的概念我們繼續了解最後一個重要的概念 “ 繼承 ”。
:::

---

假設我們現在是個造車廠，這個車廠的機器可以儲存不同種類的汽車資訊，例如品牌、型號、車身顏色等等。但因為每一種汽車的車身設計、引擎規格等都有不同，因此需要分成不同的類別來儲存。

首先，我們可以定義一個基本的汽車類別 Car，裡面包含了所有汽車都擁有的共同特徵，例如品牌、型號等等。然後，針對不同的汽車種類，我們可以建立不同的類別來繼承 Car 這個基本類別，例如跑車 SportsCar、越野車 OffRoadCar 等等。

而我們沿用上面範例已經有的 Car 類別

```python showLineNumbers
# 定義一個名為 SportsCar 的子類別，繼承自 Car 類別
class SportsCar(Car):

    # 定義 __init__ 方法
    def __init__(self, color, brand, model, license_plate, max_speed):

        # 使用 super() 方法，繼承父類別的 __init__ 方法，並且傳入color, brand, model, license_plate 參數
        super().__init__(color, brand, model, license_plate)


        # 增加 max_speed 屬性
        self.max_speed = max_speed

    # 定義 drive 方法
    def drive(self):
        # 使用 super() 方法，繼承父類別的 drive 方法
        super().drive()
        # 增加一個額外的輸出
        print("極速行駛中！！！")
```

建立一個 SportsCar 的實例物件

```python showLineNumbers

my_sports_car = SportsCar("Yellow","Ferrari",812gts,xyz-9999 , 300)

```

呼叫 drive 方法

```python showLineNumbers

my_sports_car.drive()
# 輸出：Yellow的Ferrari正在行駛中...\n極速行駛中！！！

```

這樣做的好處在於，可以減少程式碼的重複，例如 SportsCar 跟 OffRoadCar 都需要儲存品牌和型號等基本資訊，如果沒有繼承 Car 這個基本類別，那麼這些重複的程式碼就必須在 SportsCar 和 OffRoadCar 中都撰寫一遍，不僅浪費時間，也增加了維護的困難度。而繼承 Car 這個基本類別，就可以讓 SportsCar 跟 OffRoadCar 共享這些基本資訊，只需要在各自的類別中撰寫特定的資訊即可。

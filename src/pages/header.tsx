function Header() {
  return (
    <>
      <div className="header">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFBcUFBUYFxcYGBgbGxcaExcaFxsXGhcaGxoXFxsbJC4kHCEqIBcXJjYlKS4wMzMzGiI5PjkzPSwyMzABCwsLEA4QFxERFzAcFyAyMDAwMDAyMj0wMDA9MDAwMDAyPTAyPT0yMDIyMjIwMDIwPTIwPTAyMDAwMDIwMjAwMP/AABEIAIsBawMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBgcABQj/xABFEAACAQIEBQEGAwYEBAMJAAABAgMAEQQSITEFBhNBUWEHIjJxgZEUQlIjYpKhorEzcoLwQ1NjwZTT8RckNERkg6Sy4//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A1ijYfvXdA+a4DJ63oJFQ33PzNF648UnSvrffX70DYN/pUqo4TJrvS9ceKAc3xH/faui+IU/p5tfNcI8ut9qCRUaff6U7rjxSFc2u3agEm4+dTaj9G2t9qXrjxQJiO31oNGPv+lqT8OfNBIoWI2HzpOuPFIWz6bUAalpsPlQugfNL1baW2oHTfDUaj582m1J0D5oHw/D9/wC9LKbKb+K8bj3MeG4fHmnfX8qLrIx8Iv8A3NgO5qhy4vGcws0cR/DYJCFfN7zyORezBfisLe7cAXuSTawaSjqdiD8iDUrD7H51SIeQlwSCTh7FcSmuZ2OSZe8Uqj3Qp7EAEGxqdwrm5C64fFwyYTEMQFRxeN2NhaKUe62un8taC3GoVH648UnQPmg7D9/pUio49z1vS9ceKALbn50SDf6UvRvreuC5Nd6CRUSX4jROuPFJ082t96BkXxCpdRwmXXxS9ceKBk+9NTcfOiFM+u1cIra32oJFR8RuKXrjxSEZ9drUAanVH6B80vXHig7EdqBRic/pau6B80BU2Hyps+1N6ttLbaUhbNptQBqTFsKZ0D5pepbTxQHoGI2FBznyfvRYdb31+dAGpabD5CuyDwPtUdibnU7+aA0+1RqLEbnXX50bIPA+1AkPwj/fell2NAkYgkDT/wBK6NiSLmgHUiDb60/IPA+1BlNjppp2oDtsah04MbjU/epOQeB9qAeH70eo82lrafKhZz5P3oENFw+/0o2QeB9qHMLDTT5UB6hybn512c+T96OALXNttSf+9AKH4qoHPHtGXDkwYMq8oJDyEXjjI3VRs7/yHe+oqv8APHtCacvh8GckWqtKNHk7EIR8KHzufQb52BarAfHYySZ2kldpJG3djcnwPQeg0Fb3yLwn8Jg4YyLOw6knnPJqQfkMq/6axzkfhH4vGwxkXQN1H8dNLMQfRjlX/XX0U6ix0poBgsXHMgeNgym4uOxBsysNwwIIIOoIINeVzdwt8VDkjKrKjxyxlr5RJHIHW5GoBsRf1rPub8TiuEY44nDG0WJ994zfptKtg4YDYn3WzDX3j20rTOX+IDF4aKfLbqIrZSc2UkarfvY31qCLwvi6TM0ZVopksXhe2dQdmW2joezrcdtDpXv15HHOEx4hLkZZEDNFKpyyRvbRkYa/MbEaEEUDl3iD4jCYeZj70sUbtbQZ2QFrfW9B62I7UGjQ63vr86LkHgfagVdhQ59vrQSxvufvT4jc66/OgFUuLYV2QeB9qA7EE2NAab4TUWiREk2OtHyDwPtQNg2pz7H5UGU2OmnypqsbjU/egZR8PsaJkHgfagzaEW0+VBJqDTs58n71JyDwPtQCw+5qRQJtLW0+VBznyfvQc+5+dPg3oyqLDQfamyiw00+VAaosu5pmc+T96kR6gUA+i3pSoMm/epFAxGwoHdZaGYidfOtCqWmw+QoAopXU0TrLXT7VGoCshY3GxrlQg3Paiw/CP996WXY0DestMZc2ooNSINvrQMERGtE6y09tjUOgM/v7dqTot6U7D96PQC6wprnNoKAaXqrGGd2CqqkszEBQBuSTsKAnRPp96wLm3m7FYuSROqww4dlSNTlQxhiFL21ckWPvXHgCrDzj7SpJc0ODukWoaYj338hAfgX1PvH93vm4FXB1LSGtm9n3LeCm4YwYCT8QT1TazKyEhUU7qU3B8sSN6uimezTmKDA4h+stllCp1f0WJPvD9JJFz2sO17bn1lYaG9xoexvsb1898zcsPw7EBJi5gZhlmRASyeACQokA7E+u1bDyPjcLLhYxhc4ijJjyubyKVsbNqdwwPixFrbVNDOduBfjsFIiWaRPfjI36iXuvpcZl9CfSvM9m3NkOIhTClenLFGAEF8rogC5lvsdrqdde/b3Zsd+ExixubQ4snpt2TEqLtGT2EijMP3lfu1ZfznhH4VxRcRELI7dZBsDc2mi+tz8hIPFBtf4hTcA3I0I8Ei+vjSqzwmJuHKuGlN4c5EM/5RnYlYZf0NdrK3wtoNCQC/H4T8bFHiMJKYpSgaKVdip1Ecq6h011BBsbkd7v5X4u+Ljkw+LjCYmL3J4iBlZW+F1BvdGF/I37WqCwJ7m/en9Za8h0fC2F2kg7Xu0kXpfd0/qX94fDMRgQCCCCLgg3BB2II3FAcxE60qrl1NGXYUOfb60C9ZaG0ZbUd6FUuLYUAVQqbnaidZaWb4TUWgK6ltRXLERr4okG1OfY/Kgb1lpjjPt2oNHw+xoG9FvSidZaLUGgMxzbdqTot6UuH3NSKAIlA08UjMG0FCbc/M0+Deg7ot6U5Xtoe1HqLLuaBOq3mnx+9vrTOk3j+1PjGXfSgJ0l8UFnINgdqN1V80FkJNwN6BY2LGx1FF6S+KFGpU3OgovVXzQCdyDYbUisSbE6UrqSbjUVyIQbnagL0l8UKQ5TYaUXqr5oUikm41oEEjHvRukvigiNh2o/UHmgFL7traUzqt5p8vvWy61UPaFzAMFhmRXtPMCsYB94A6PLpsFBNj5tQe1x3mDB4JC00ihgCRGGBkY20Cre+vnb1rCuZOZsTj5C0jER5rpCCemg7afmbT4jre9rDSvGZiSSTcnUkm5J8k96QVqDqdGjOwVFLMTYKoJYnwANSaaa172W8qCFRjZ1tI4/ZIw1SMj4yOzMNu4U/vEUGVYbh00iho43dWkEYKqWvKQGCad7G9Wj2a8yHB4jpO1oZyA19kk2R9dv0n5g/lrbMNg4Y8/SVVMjmRsotmcgAsfUhR9qynmbh8HDOKJiJoBLh5szhbXCS3GdguzEEhgp09821AtBdU46h4hNw/EhWEqo8WYAqwMYDxMDodUZh5uw8VO4Vy1Fg5pJMOckcqjPDqUWRT7rx/p0LArt8NrWscp9pmKSTFwYmCQMjwRskiHUOksmoO6sPd03BFWfhvtTjKYdJkPUYlZ30WNANBIPNyQSOwDel0DvaticRHGuzwSEDuHhxCHPHLG66i4BuD+k7ZqHig/G+D9UpfEwMbWHxsgGfKB+tGvb9Qt2r3Ob5Y416eMGbBYghOqCM0EvxKWP6CVzBvyka3BFjcncJn4fmw+ZJsK15I5QQJFLWurgaMCNQynzoBagrXsa40HSTBub5P2sev5GNnUegYq3/wBw+KvPEOH53jnSyzxAhX2DI3xRSW3Q/wBJAYbWNJxfKmJw3FosTgkBidy7++FRA2kqm/YhiVAB1Phas3HuMNgJonmv+FmORn36MoHusf3GUG/gpfuaCyRHMLt289vO1ZpzhzxFhTk4fKruWOcBBJCu9yjXFnJ3C5l0N7HfS4WAF7ixAIN7gjyLVkvtG5HEZbF4Rf2epkiUfB5kjH6fIG240vaYGcp8+YnDS9LHtIY5iGWSRSGQsBZgCBeM6baDcaXrXInz97gi4IOh8EEb1nfIPGosTgGinQSnDLZoygdmg/IwQ3z2W62Fz7o3JF5HBnw7ZpuFYtwkQDyYRg7QsmpyIkgzRE5SAyaAgaHY0aF0l8UFmINgdKZgOIRTxpLG2ZJFVlNtwwuL+D6U90JNwNKgVHLGx2ovSXxQkQqbnai9VfNAJ2Kmw0FIrkmxNK6ljcaikVCDcigN0l8UOQ5dtKJ1V80OQZttaBnUbzR+kvigdJvH9qP1V80A5Bl20pnVbzRJfe21ofSbx/agOIwdbU2RQouNDTg4GhNNkIYWGpoBdVvNPUX3pnSbx/aiKbb0B6BiNhTes3pSoc+/agDUtNh8hTeiPWhmQjTxpQEn2qNRUYtoaJ0R60Cw/CP996WXY0FmINh2rg5Oh2oBU58SkUbPI6oi3LMzBVA8knaqpzVz1hMFeND15v8Alowyqbf8R9l+QufQb1k/EuMYvikoWWVFW91V5BHBH2v7x39febU28VYL3zF7Snkf8Pw1C7OcolK3LMdAIkP/AOzaelta93A8u4mOKN0xLJi8t5GYtLBK5JJEkbHtfKHQqbAbiwry+SuGcLwLB/xkE2Ieyh+rHZc1hliW+l9rm5N+wNq0Xor60FN4lzo2Chc4nDuk40RVu0MrdikoFgO5VgGABsD3xbivEpcXK00z55HOp2AHZVHZR2H9zc19DcycGTGQPh3d0V7HMp1BUhl30IuBofFYfzLyfi8CbuBJFewmQe5rt1Af8M/PT1NMHk8Gw3VxEUYjMuaVAYxu65ruPT3Q1z2AJrYebOQIcZmlgyxT2vtaN7dpANj+8PqDpaR7PeVIMJCJs6SzSr70qEMgU69OJh+XQXPcjtYASOauY34ZLG7xmTDS+6zL/iRyDW47OrLrbQjI2uoFBhGMwskMjxyKUkQlWU7g/wCyDfuCCKtPHufMVisPFACYyFAmkVrNIwNhYr8KkAEjuSRsNb3zDy/hONxpicPKqyAZeoEJDKNenItwQRfTuLnQ1nHHuS8dgkLyIGjG8sbZkAPdhoyj1It61Uaf7MONYnFYf9upPTORJj/xABqD5K7Ftj8wal+07Bwy8PlaVgpis8bd+qDlVB/mzFf9V+1ZxyTz5JgrRTBpYPy2N3jvvlv8S6/DfTt4M72qcaGKXCtDIsmHYOwy/wDNWwOcHUEK4sDYjM1RWeXoqYWRo2kCMY0ZVZ7e6rPfICe18p/l5Fw1tXsywWFPDzHmjkaUu00eZWtm91Uddx7irp5JqjH8ZxGaYIskjusahUVmJVFUWAUbDTvvWseyLFu+EkRmJEctkBN8qsiHKvgXzG3qaz/njgUeAxRijYsjKHUH4kVmYZWP5rZTY72tfXUy+QubBw+QrIuaCUrnIHvoRoHA/MBfVd7baixDcJAxBCkBrGxIuAexI7i/aq4cXDxnC4jBuOniEukkZNzHKje7Ih0zpnUEMNxobXq0wMkih0YMrAMrAgqQdQQRuKyv2mYKXCYmLiWHYxsxCOyjaRRZWbyGQZSDp7gHesiFyTzg+BZsFjcwjQsqkgloXG6EDUoe2mlxbQ6aPHxyObCSYrCgzBVkKplZS7xg+5Yi4JI8dxVNwXE8Bx6Po4pUhxuWySKBcnzGx+IdzGx82vuKkmM4jwPENETYXzFDdoZF2Ei7HW1rixFrHaqNR5dwHDcUycQwi9KQXDdM5NTbPHLH8OvyudCDsa8Xj2BPBsWeIwxl8NLdJ4lNijMwPUQbWLDY7EkbMMtdl4zFjGabBSNgMc4tJF1MsWItr7r6KJL7FgtySO+arB7O+OHEpNgMe5eXM1klJzujLZ4zm1JBBNvDC21BK5K4jEk0mFicNBIGxGFI7IzftYLflMbn4dwDWgxbCsF5p5dxXB51lhd+lnJilGpRiLZJAdM+XS9rMB8wLdyH7QmnYYbFlRITaOSwUOf0OBoG8EWB23tcNLm+E1FoquWNjXhc3cyQcORHkVnaRiqopUHQXZjfYDQfNhUHr4rGxwRNNKwWNAWZj2A/uewA1JpMBxOHEx54XDqVB00IBFxmU6rceRWF8485S8RKoF6cKaiLPmLP+t2sL27C2mu/a9+y3EDE4PI6nNBI0aSAlXCPaTKrDXQkgrsQFverBe6Ph9jUFM8bqjnOj3CvYBgwFwkgGhuA1mFhpa1yLzXOTbvUEioNF6zelE6I9aBmH3NSKjsMu3ek6zelAN9z86fBvRBEDr5pGXLqKA9RZdzS9ZvSnKl9T3oBZD4P2okOl76fOpFAxGwoCZx5H3qOym50O/imVLTYfIUAYQQddK87mPmHD4CLqzNvcIg1d2/So/uToO9P5j4tHgsO873IS1lBF2YmyqL+Sf7mvn7mPjkuOmM0mnZEBusadlXz5J7n6ABO5m5wxWPclmMcQPuRKxCi2xci2dvU6DsBXivj5mGVpZSv6TI5X7E2qPXCtBBXUtdQSOHYbqyRxmRYgzAGV3CLGL6uWJFrDUa72FfTkE6OoZXVwRowZSD63Gn2r5bNaX7IeM2MmCY6G8kfz0DqP5Nb0c1NFu9oTYqGEYzByENDcyJYMjxdyynT3TrcWNi2tH5Q40OJYTqOi5rtHJGBdbjtY9irKbH9VeHzN7R48JK2HjhE5U5ZCZMqA65ox7pzHsTsDprYiqFHx/8AByNLw2V445GBfDSKDkOvu91dNwGBDAWB8kLfP1OXsSzxq0mAnb/DDe9FJa+UX72GhPxKLHVbn38ZxLA8cwsuHhlHUK5lR1KyJIuqtlPxAGwJW4sSL1R8fztFxHDnDYxDC2ZWE0S50DrfVo2OYLqRYFjrVNxGHeBwyyA63SWNzY27qwsyn0NmF9taQW/2dcSjwWIkixEjwOzZHjkUdIlRYXYaxyA3974SDbwa2v3XWxysrLYg2III2I7givmaaYSxguR1IwFB/wCZENFB8smgHlTb8gvpnsu5igXDfhpZUR43IjDuFzRtZgFLaGzFhb5U0eF7QORThC2IwwzYc6sg1MJ/7x+v5e+mtUSvqCNQ2hAIIPqCCP5ism579njQFsRg0LRbvCou0fkxjdk/d3Xtp8IZxTopGRgyMysNmVirD5MNRTQQdRXVRc+NQniWDXHp700CiPFL3KKLpOB8jc20+L9NVOPAzOudIpGT9SxuV/iAtXrcn8xPw6fqZc8brlkjvbMm4IvpmB2v5I0vcaD7RcamN4bHicLISkciFgpKlQyshR13Ugumh9DtrUFC5Z5txfDmtG2eO5zQuTkJ7le6N6j6g1oj+0HhWIiyYgOA4s8Tws4+V1BB8gjXbY1jV6SqL1xLkZZohjOFuZYSSRE1xKpViDkLWLWI2PveM1xQMNzMmKi/B8UDnISI8VlJmhfb9oN2HY99NbnUQ+UucpeHLIixrLG7B8rOVyvbKSCAdwFB0/KK92TjHDeMMy4qMYKYLdJxIpBt+SQlVB9A3rYg7hSOK8Nkwz5HysCMySIc0ckZ2kjYaMp/lsdajGZyVbO2ZbZWzHMuX4cp3Fu1tq9zi/C8ThYiM0eIwhY5JkbPEsl7XBBvG50BU6G/5tLeBeg1jlDneLGJ+B4llYuMgkewSTwsn6X2swsCQLWNr1Dnfk6Th0hdMz4dj7kndCdo5D2Pg7H56VVSKvvKvtDeFBh8avXgIy5iAzqu1mDaSLbsdfnoKghQ+0fiKxJErJmUEdVkzSkdr5jluB3IN+/rXuK8XxOLYPiJWkZQQC1gADqbKoAF/QdhWgcV5FwmNQ4nhUyfvRFrpc62F/ejP7rC3+Ws5x+Blw8hjmjaNxurCxt5B2YeouKoj1sPsr4thOkuEQsJgGkkzKAGYsLhDfXKMg2Ggv5rHq5WIIIJBGoINiD5B7UH1JOiuCpO/rqCDcEeCCAQexFeVDxVDJ+GkZVnUXCkgdRL6Sx+diCo1UgjaxNd9mDYh8H1J5HkDu3TDsWKxp7u51N2Dd+wr0uc+WF4jhiq2E0ZLRNtZraoT+lrD5EKe1ZFgyHwftUrOPI+9Y/ydzdi3BwUuKjgkVsiSTxNJICCVaInMq5wRYFr9xrpa8cHfFYdzh8W/VDMTFiMoXPfUxSKNFca5ezD1BoLJNra2vyoWQ+D9qJh9zUigYrCw1pkpuNNaA+5+dEg3oGZD4P2qRGDYUSosu5oHdc+K4HP6WoNGw/egXoeteTx3mTDYBM07gdlQayNbT3V/wC5sB3IqPznzRHw6HObNK9xFHf4m7s3hFuCT8huRXz/AI7GSTyNLK5eRySzHfXsPAHYDQVYLDznzpNxIquQRwoxZY73YmxAZ22JsToNBc771V66uqjq6urqDq6urqDqNg8VJDIskbFHW5VhuCQRp9CfvQa6g6kpa6gSlFdXUHV1q6uoPQ4VxvF4T/AnkiA/KrXT+BrqftVw4b7V8ZHpNHFKPIvG/wBSLr/SKz+kpBbeZeY8FjgznBGGY3IljlUhj/1VyLm+e/r2qqqpJsBcnQAaknwKbShiNRoR37/SgSpeC4jJCsqIfclQpIh1Vh+UkfqU6g9iPBIq98lcXwWM/wDdsdBC0z6LO0aB5OwV3AzCTw17n57xebfZ1Nh80uFDSxC5KbyoPkP8RfUajwdTQUOurhXUHV1q6uoPZ5d5lxGALiPI8cgs8cilo37XIuNbafLe+le7HwLCcSjEmDkigxNj1MGzkRkgnWItqLixtqutvd1qk1xFBJx+Alw7mOaNo3G6sLH5jsR6jSo1OLE2uSbba7fKmmgLhMVJC4kido3GzoxVrXva43Gg02q44fntZ4xDxLDriY/+YgCSrpbMuwv8iv1qkk0SfDSRhS6OgbVSyMoYeVuNfpQWfGcrRzAycNnGIS1zC3uYlB/kNuoN9Rb671VnQqSrAgg2IIIIPgg6g0iMVIZSQQbgg2IPkEbGvWfjjTALi0E9tBKTkxCjx1APfG+kgb6UErhPOmPwqrHHLeNQAsbxqygDsNMwH1qzcG9quIWRRio42iJszRqwdf3gCxzW7jfxroc+xKRg/s3LKf1JlcejDVfqCfptQTQab7TeXo50HEsNlZWUGXJqHS1lmFt7DRvSx7Gqdg+bsdHH0ep1IrZenIiuuX9N2Ga3jXTtamcI5nxeEikhiktHICMrKGyk7tHfRSRcHca7X1rxQKC/cse0qfDnJiVM0V9CCeogvsCx/aAafEc2nxGthwvEEljWSMhkdQysDoVOxr5hq38k86PgP2UimSBjewPvxk7tHfQg9108jW95Bu3SvrffWkK5dd6j8J4nBi4llgkDoe47EbqwOqkdwbGpc+1QM658UvTvr5oFSYthQFrwea+Pw4CHqSm5NwkYPvO1vhX08nsK9frjxVA457PZcdM00uNJbZV/D+4idlQdTQf3OtBlXHeMTY2ZppTdjoFHwog2RfQXPzJJrzq1b/2P/wD1v/43/wDSmH2TKP8A5w/+GH/mVaMsrq1RPZIp0GMP/hx/5lPX2QLfXGEjvaAA29CXP9qDJybV7vBeUsdjLNFCwjP/ABH9yO3lS2rj/KDWy8F5M4fg7FYRJILftJLO9/Iv7q/6QKsnUzaeaUY7iPZViBGDHPG8ndCjIvyV9b/VRVP4vwHF4T/HheNb/Ha8Z1sPfW6+NL31r6R6B80hIUZSL3+1j2pR8uV1b3xfkXh2Kuel0nP54iENz3K2yH6rVbi9kC5jnxbFOwWEK9vVixH9NKMovSMwG5rdcF7OOGQ2zxvKfMkrfzVcq/yqxYHhuEw/+Dh44vVI0U/cC9KPnN+HTrGZGhlWMWvIYnCa6D3iLf8AqKi19RPhswIaxBBBBFwQdwQdxWdcd9lkUkofDyiFGvmQxlwp8x+8LD90nTt4pRkV66tlwPsvwCf4jzSn1cIv0CC/3Jqpc1ezrEYW8uHzTw72A/aoP3lHxj95ft3qij11cDfauoOrq69dQdV65M5/lw7iPFyPLCRYMbvJGRsQfiZexGp2t4NJw2HklOWNHkb9KIzn7KDVn4d7POJz69IRDzK4X+lbt/Kgs3MHD+D8SvJh8VDDOf1N00kP/UR7G/7w183rOuK8Lmwr9OVMp1sQQyOB+aNxow222vrY6VpPD/ZD3xGK/wBMSWt59973/hFWXhvIfC4NsOJDveRjJr5yn3f5VBhGGgkkbLGjSN+lEZ2/hUE16eL5ax0SCSTDSqh75CberBblB/mAr6Jgw6KoSNFRR+VVCr9ANKL0D5pR8tKwO2tL3AG50A7k+B5r6K4vyzgMVfrYdC361GR/41sT9a87A8tSYL/4HoHT4ZoQHb0OIjs38SNSjKOFclcRxNisJjU/nl/Zj7H3j9Fq7cJ9kiaNicQzbHJEoUfIu9yR8gpq2w8VxSnLiMDKnmSKSKdPnoVk/or1sPxONrAZgfDxvG38LgGlEHhvK2Bwi3hgRWH52GeT+N7t/OpuJw8cqlJEV1O6uoZT9DUsvm080nQPmoKTxT2Y4GcFoi+HfX4Dmjv6xtsPRStUDmL2e4vBo0uaOSNd3EgQgequR9gSa3UNl03qDNwvDSOHkiWRwTlaQZypP6M98n+m1Wj5wwmElmNoopJT/wBON3++UGpPE+CYvCqrTwyRK/wsy6E+CRsfQ2NfSa4ewsLAeALD7UPE4aN0aORFdHFmVgCpHgg0o+YK6tnb2X8PMhfPMEJ0iDrlHpmILEfW/rXvYHkfh8NsmHjJH5nBkP8AXelGAYTCSzG0UckpHaONpD9QgNLi8FLD/ixSRdv2kbx6/wCsCvpxEEYsAAOwAsB9KUzA6EUo+a+CccxGDk6mHkyk/Ep1jcDs631/kR2IraeTudMPj7If2U9tY2b4vJjb8w9Nx4717GL5bwc2r4eFr9zEub+IC9eNifZ1w0nMI3jIIIMc0ikEbEXJAI80F0qLLuaDgVMaBDI8lvzvlzEdsxUAH52v5vUnp3181ACjYbvRsg8D7UHEG1raUEiob7n5mm5z5P3qWqiw+VACDf6VKoM2g0qPnPk/egfN8R/32roviFGQXtSsLA0BKjT7/ShZz5P3o8Oo180AU3HzqbTGUW2qJnPk/egNiO31oNGw5ve+tGyDwPtQKKFiNh86jlz5P3osBvvrQCqWmw+VLkHgfaopc3OtBA4hy1gJbvJhIGY7sYUzH5sBf+deFifZ7wuT/glD+5LKP5FiP5VcITffWjZB4H2oM7PsnwTEMJZ1Hdc0Z/mUvXs4L2fcMhF+gJDbeVjJ/S3uf01ZZjbbShhzca0oFDCiDKiqijYKoUfYVLw+31omQeB9qBObbaUEg1Crg58n71MyDwPtQBw/f6VIqPiDa1tKDnPk/egVtzRIN/pRwg8D7UKfQaUB6iS7mmZz5P3qSouBQBi+IVLoTi1Rs58n70BJ96am4+dFg1GtEZRY0D6j4jcUHOfJ+9Gw5ve+tAGp1NyDwPtUPOfJ+9AfEdqBRcMb3vrR8g8D7UCJsPlTZ9qjtIbnWiQ6nWgFUmLYU/IPA+1RmOtB/9k="
                className="h-8"
                alt="Mountain"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Mountain's Gallery
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

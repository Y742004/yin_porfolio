import { Button, Image, Link } from "@nextui-org/react";
import { useState } from "react";

export function Section4() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
        projectUrl: "https://hotel-reservation-yin.vercel.app/",
        projectImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUXFxUYGBcYGBcXFxUXFxcXFxUYFRcaHSggHRolGxgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgEABwj/xABFEAABAwIEAwUFBgIIBAcAAAABAAIRAyEEEjFBUWGRBSJxgaETscHR8AYUMkJS4XLxM2KCkqKywtIVU5PyFhcjQ0Rjg//EABsBAAMBAQEBAQAAAAAAAAAAAAECAwAEBgUH/8QALREAAgIBAwQABQMFAQAAAAAAAAECEQMSITEEE0FRFCJhgfAyQrFxocHR4ZH/2gAMAwEAAhEDEQA/AKbOpB6ACiMC+4eToO0orQh0mpptNACjZ5jSjMCkxtlNLqLxxHWogKHK6CimWSSDtKM0pUFFY5NyNdcDLSihLtKO0pWYI1ECG0ogQs1HQuyvBTbTlGzURBUgFL2SkGrWMoM8Go1GjuV2jTlFrugQpznWyKwxqX9ANepslHlTeVApoxoXJK9gbkFwTBaommmJULFibwfZznnRP9m9lF55K+7tIZWa7lc2TNvphydWLplFa8n2XlidDs9lES654IOIrF2unAKVV8mTcoBKWEEt3ux8k3LZ8evH/QLwgFqZcFAtVSVi5CG4JhzUMtVIiyVizmITmpstQ3NTEGhFzUB7U89iA9idM58kRFwUITT2IBaqJnHKNGcZTTNKkjU6KZZTXLrO5YmQp00w1qkGKLcUyC4mGgxJ0nmoz6jHGWmT3OrH002tSRMMUvZpKp27RBgFzuJaLDrr5J7C42nV/A4TwNj0VNSDoIlq6QjupKJoqiFaBAIzFCrlYMz3Bo4kgD1SL+3sM0/0oP8ACHO9QEzaQqZbNRmLPV/tPRaO4HPPhlHU/JDw32pJ1pjW0ONh0SOSCatqK1U2D7bpPMSWn+tofNW7WoMKCLocVEIgQsejodKmxqi0JugyBJQc6VjKLboI3uhK1HSpVnyotZKSPtlpUlpQItXsiYFNTFFU1ktAqGK07L7MLrkWTHZvZmY5joraqYGVth71zZczb0xOrHiUFqkt/CF61UNGVlhuVW1XJqoUtUQgq2Rm23b5AFQciEKJYqp0RkrBlchTLVyE6JUDc1DLUdc9mToE10BCpaoOanfu/EgKX3ZvM+i3cSD22yrexBdS5K5dTA4BQEDUD3o9z0SeHwyl9gToFJvZNQ3jqrj7xl0b8FF2OKDyz8IHw2P9zMRTauU8ZTh5n8Bh3Iqn7a7VLGEMnk9sGDvI6LKOxJcS8HSCQDJ5mJkDltK+dk6mrUTuxdLauR9Gq45mQFpkOmCeRymRyKqMU41SKbcozXOuoEnSbeMLLu7VIyhwOW0RqMzpLiLyJlXnZfatEVCYl+WWiSMoygkG+5jRfK6hzm9TPo44xiqQXC9nEkNi/A7qwxnZzWBktIduQYAjeeI+CTwuND//AFGuk2IaHCdi2RtqQdxCusVhnOaS5wBAHg4lswD4oz6ucpxjelCrDGMW2rK7B9uOY+XZ3sOxjMDGoPjsVDHfaaqTFNrWDmMzvl6IgwDiYAmBm+vNKdodnlpE8J+vOy+1jzp1FM+XkxPmiixuIqVXS9znEcfgNB5ITKauRgY8VCpQAFri+4TuYkYFNUdsNd1YMFgB/NAweHLn6WsTuQFa+yDXgeJE6QYIjqRyhLLIk6KRxOUbBCpHd6q97I7UNIjMXFkEETMcwFnsMMzo3J+Ep/CtJamc6JrGz6Dh6rXtzMIIO/zRwsb2LiXsdI03HHktlTcHAOGh0TqVjJBaDJKNXqLrGwErUckvUy8Vpjq8s5KIx6EuqhIY9on+y8KXu5JDCUC9wAWqo0hTaGjVc+Wf7VydWKCS1yCOcAMo0GqXqmVGrV2CD7SEkY0FtvdkhQnVQdhuYXPaLhcU9sTYGaIUTAU3NPFDNIplvyyb24RB7p2CG6l4KbmFRhUW3Ajd8gHNXJRXUzwUBSPBUTRKmQzHiuEFSIXEQMg9wQDU4JhzUFzFtINaQBzyhEJlzVDKqJJEXNs+SYjDh96YLRElrjpJy6jgfQhV+KwTnPDmlrpN5/1Hnw2smq9UNBb3i+0wRAmAJF9zoq+qKkEtcS3kACTeZHG28LzEXJu2z0NJcClHDkPEgtltpubEZRY2u2PJS7LrBtZ1ZzRDNBc3kRziOOyVqCoDmIc02Am8DmfXRRxDmgZbSYJdMxYBwtzBV2rVANF2digSRRygu9oSSNBqHBp30i0+q1OH7VaQ1oqBxyAEutdsBziOc6b5lgexWVZLmNk5SG3jKXQPDXlqAZ4ko4BxcA6Q8vu51oA3gXJJnqFz5cKls2NGRtB2qaDSGd4ki8GA2ZAE8gTfiNky2u+q1pOUFze627oAJJOYWI1Jvboq+icOx7adYsMSC4Wz5od35MWkWGvPZTtDtoOzNaWhrYIIJM6C1tCLQVzRUlK4c+x3TVMvWYYVGgwWMH4ydbDbx1jmqmlgH58kRxna034WKo8R9o6rCCKjodAIERDTYDged9VoPsp2qysHyx5fYvuIJkQAdTJkkngu9dRkgm5cfn5/4c7wRk1Qy/BNpggG5iTGvwSePwXtGNsQ8F0G0RbUeSuK1JtQy1h/EREjUEg34DLrve5TBoQRLQI+f11U49Qv1J7le2qcXwY+nTyVCw6j614K3wddsgBpaI3M8pXPtFTee+ACNzoQdZFhP7qvwLy4iTfnafNd8MuuNs4p4tMqRosFTAdrNytL2NXh2R2moO19Qsphjx1Who1IpydTohkz9qOr7Gx4Xkmsf3+xf4uvwSftVlXY6ox9iY6jzCs6Haoi4vy0VsWWNbh6iEtVIuQ5EZcwqkdqNVx2C11V4O3VPPNGMbFw4JTlRpeyMKGNzHVMVXc1CtWiw0HvSrqoUYe3yy0nqe3HgIVEtXgZ0S1fFBpjX4KliUPUw3cKNWNgl2ukSChvzcUQBYC4RzQPaqQrIiOghNtJQ3VTsu+3C57YfQRBv4IGq7iouLiiy07rhYEdgOwBZa6GWpkwoEBVUyEoPwAXCEYgLxHJHX6B2/Ysaa57EozpUI+pK2uXgXtw8nwDA9sMke0HcLu8xpgk93vGwEaAfwq4qGmbhzWi0iZG/wCIjhB0PvWHYYOgPjon8KypWBbIgCxIJmNGTsOC+JPGuT7SZYMdma5ze7BAk+E2PXoq+swOzOiwyyfExHjMeq4KD2NEi2Yjz01HOE92dTpmmTUF3OAFzlaL8+MdCj+ncwrh8e8FrQcsSNmmCQdQOAHgmz2odzERcW0jQxy3SFJtME1Gl0NGh1JJixG0cjzVz2RjaJc+rVyy5pblGaGyCAS024i0+qE6W9GQlWrioTFQnWC8QWjYwJ5dEOvTIaC1l22Ja4EG+sTmHpryV0/DU3Fr3N9mC4mw78hou0gRaLDQgFVWNrZchzOjKdPZPHAFwGWDPG9hvK0XfAGVuKqvNniIA9YIPnIM80/2fUinAJBLwSQM0ai8HWC79khSxRaDAI1/Na9vwkGbbITqvANHgNeZlUcbVGTNVR7VqUquZhLabLtbBL8pBEhxES4hxjQaWWtoYkuYDUs5wBygNtN41MnxXzDCsa5wLn7tFxraCZ6819BFQECHTzUJYo39TSk6Hapa6JaDHHUD6KA3CtnMIBueGnOPNA9paeaGcSJ3/lxRUH4F5L1sVHjSYuNDbUhQ7Xx+UBoP1zVX2fVgl/TkkO1sZmdOqTJFvIoeF/JbA6jLK+Xsi3wmJzam/L61RDSIEtNuBuFnsO8mwMHxV1gcQAO/JMW8diqNuPBO1LkfwrpcG78F9L+z+F9lRzbnRYX7MYR1SqJaI9ZX0PEVQIaNGiPmpxl3MtPiO7/wWmu3ipcy/gHUqILjK458oRXUsm+5BrbY6apFgUrUN7qb3oTiqqROg+CrQcp0OninKlJU9Qqz7PxOdt/xDX4FUhInJHRRKmMPzUnvIUBXKpYjSC+z5KLqZ/T7lz71yXjiTwRtg0olTongpuw7v6vWUIYo8Fz7ytbBpiEGH4lcdhkMVuZCkKw4la2FaSL8NG67925noumuFwYkDZC2Conhhefopfch+r0UTjEM4nmtuH5D8qkEagqdGsWmWmPiOYX1Adksd+Vn+FQf9nKJ/ExnVfI+Lj5R9b4V+GfOPvDnWc+BzvvNghTuIMbG5M7x9bL6FV+w9B1x3f4Xj3FKO+wYHeZWe082g/JMupxgfTZDB5kei2RcOgXkNm+mvVbt32XxJEHFU3AEGHM4EEac4TmG7IxVMBvtMKQAAJY5tgIF4WfUxrb8/sZdNLz+f3MnS7Xp5WNFO41MMlxmARu3bu3VVi8TmvlYDxaAAZkkxG8+RavpjMM51qjMI/qZ8i1HZ9m6LtcFRI4ta4crGAprqYLwN8I/DPkIG8WXiea+vu+w+HP/AMIj+Go4fFCqfYfBj8dCo3/9Y94Cf4uHpg+Fl7R8naRItF7ka+tgt9SxgoUGZW0nt1/pMzgwwQCIBtJ5q4/8vMCbzXaDp32OHlZSq/YTA02/0lTyFVxMX/JbZLLLGdc/n3B2JR5aKVvaVN8AAgumIII6KDyBoQTzt4K2w3YmAYbMxBPHLWA9R7kWp2Zh/wAuHJncurethCpCTT2slOKXlFW6rlZA1VbWDnXj1WlfhKensB5msR/mRDhqUd3CtHiap+IhNGLu/IjlHSo2ZjCsIPHzHnvZP03l0/O0+XLgrcYWnthqQ/63+9cZhmN0oMH/AFP9yd45S4I9yC8m0+xOHaymak6DfclWdWtO/NZbD9uPYwU2sYBbj8003HvcNGjqpYcEscHfLd/6L5c8J5LXCSSLn70BqV01J5yqljnHh6ozcU8fo/uD4qqxSZN5oocMqBqJd2KfuG+TPgFD7y7+r/cBTrFP2ibzw+oZ9du5UaeILSHNJH1p4IPtSb5aZP8AA2VIuO7af91qqsWT2I8+P0xs9sHUgEfVgiO7UYNlXF7piKf9xqG7EOn8TPJoEecqix5PZOWfF6ZZ/wDFmRv4Iz+0KYE5p8FRuY8jUHyNvOVAtfGtuN/9yqscvaIvqYemakL0LLipV/5jrC/ecPihmtU/5jrc3n3lU7T9k/io+jWQvQsdUqVo/GSeEv8A9yA+rU3eecF/l+ZHsv2I+sj6NyGooI4L528uifaE+bvi5ArueZaSf8Q9Q7kj2H7B8ZH0fRnAIZAXzgGoNB5yT/rUHVa5/UYt+aw4fiQ7L9h+Lg/B5la+XI8np17sJhgfpcdCtQ2oSIg+IA9+i84gmMjiYnvRl4REz0ELx2s9tpMy1rpgvjofTVMhg/UfIFaNmFG7W+AaOuqIzDM/TJ5geGwW1GozrCf1D+8fK0Qi0zOzDtdrT71o2YSn+gdAi+wpgf0c+SxrKGnQB1a3wAaPdCcotY24Y0cwT81Wdq/aRtMwzDQf/safcCqKp9rq5sBTb4M/3Ep1Fg5NV2h2lSbBfXNMgWHtiyf7JJB6LL4Tt+qcQaVM03h5MOOUmNfxBoM+Gq7gjiMW7KC55Fy0CBE7xYDmYW9Z2PhwxuWjSa6BnDQHwdwHLoxRbIZGo8mXJduwZuOaofQmFB/tJsYE7kgxwnKfctbiMODAAjw0EcQRHqkX4EzEgzygeM6J5NxeyJaYy5Mt2kytmllVkaRefMlqhTw2IImWEm0AEn0C0dTBvB/L9cCu0qhZqBMRrb3Id9+hX00WZd2CxQvHX94Q2sxJsGuPg0e9a32rXEzm9NfIXTVFrD+Ez6dFRdQyL6dLwZAdnYs/k/xN+ai7s3EjVo9Fq67QHWeZ8fiVAOMzfpMqizMk8KM/So1W29m53MEAK7w8loHsyPC/rCcFQwT3ukKNKoOPluisti9uiOVo1BM8W/FdziLW8kR8DVw85QvZjYHyMhWjMnKBIvUH1PRCfg95cLcB6S34pSph4uaj4/hBI591sj91ZSXshJfQdNVu56296I3Jw93rdVjKB2qi+gOuxMgwfkp0sO9p/pHERoQD6wqpr2Sdehwup5jr7h9eKIxjDJEA6aRCRyGSXOMRpAE89NOSkQTubx+EnTyBHoqpkXQd9GmL5vMG/SLoIwzLnM93i2bciGpZxeLte4gagz7r8OCnmcYzNHPML/5QeaomQlRIYemTbMDwIe0edkyMGALFvK+vp8Uq0AiW+yOwym4PiDdRqNDTBrBh1y5gASd+8DBTahKQ2cGRMvgcnaW4EINTATcuOxvp1CEH1JgVHDnla5sRa4GinTxFW0vpk8S0yfXTwRTYjURStT3Dc21v+34qVLCnZseMAeic+81BOYUnDeAdOpQa2IYQZa0TAm/pGqbUxNC5Fq+DeIvHO5EcLfFAdgJvmPSoPiEY0mHbb8XeB9LoAwrT/wC51LyfMlyNg0l3iMVlgOLYNrg67bG1jdRokk2y6zI4773tuqSjSLQQSMx/EYAJPF0anmUxSqO1L2kDSGxHG5MLw9H6KaJhcRrHMgjpKNTLv1CVn2Vzu73o7Kkj8RK3BqL2D+odP3XQT+pvT91TMq/1lN9YNEklCzaT3bPZdN/fc8zyiPVZd3ZdPPDquVv6gM/oCnO0u0Wk2zdSqWqWk/zVI2Cj6H2VT9nh2NpvYWET7TJBdqO9bUX1upfeD+HM3c2Ab6RHmsJ2fi3UjLHRqOV+IWtFY5G5sryWtIhjWkSJvGq7IZbVejmnjplhUrhokudB2BI1HggDEN2c5usyXX3teyXFU8GnjpbS6G5wNyDfWPmjLIKsYatiaR1aZHCR70m6s3gfejGg3XTzBQobMB3p+yjJt8lFGuDzag/SE3RrSIMDwS7Wj9XvUsnMeiwGgtanuHCOBshtp/1ukfBOexEHLDreHVV2U8D6Jk6JuKYcMB3J8bJmmG6EQePHqlqFInj70apROl5+uKOsR4iXtCLSI/tN+aMWze46qOHGW1vP90UtbsL8Qf5J45CbxMHTba2v1xUvuzdz6n0Um0XTJMD9Jgz5iUL2d5M/XKYVVlJvENNwzIFh0v0UhTpiwaB4a9EETxJ8pR2Ebm9txryum1oR4xGvg6ZJlvmRPS/uSlfsRjhBZIFwQrt2HDxMDjMT0BEFL1MI8GWutwn/AEzomjma4JS6eL5RU0uzspy94N8SW9JK5TwUOIYAIv3ZafPZW7a7wRJI5RAPkh1qhBmARzgev7qizz8kX0uPwVYF5NMeMD4whYrCmJYPAEG89QrWrVZzHPULlSlIEVD5ghUj1LIy6JMoqdB7Zz0c1xcOI9APci1797IbcQLeZaSrRpc20g+J90qYLXWIjmCOtoVY9X7RKXQ+mZ/IHCCx0xeGg3F7C3oFCvTpxelU8XMPnuI2WgxGCDhl/EOvx+arq/ZzmjuDyzvHporx6mLIy6SSM6+gC7uU4G+Ul3UCTPVHfhOBfHkP8zQVZVPvAF2Nd5DTrB9EL/iTxYscD/AfgVXvIl2GJMpObcuc/wAQ23kAPoJgST+yHTcbfX8v3TNI+On1pv8AJePZ7wmxh5xb6+uCYY3n9cgh5tlNjkjYQzWqOIpEiAugorXIWEz2KwjgbgIHsOXxWmq1AB3gEkKYdJsGjUwY8FSNvgV0hDB4aSLWkSbwBzKu8TUDnktzHiREWi6XbiGhoa1oPFzhck8BKg2CbC/hN/BVXyqhKt2N0ZjLYDWbmeeq4JLoIBPIqFIEbyNYtx1I13RnOudt42HGLJr2Frc6+BtbmRPPQqLL2EepUm1IggDxEiOU7qbKjeBnkQfE6+qOz4BuQNHiL8vReLT9aoktJ1J6Cek3RAWxLgZ+G2vntutRiAdxv9c1e4V9B1NrR3X2v8SeKoXgHQfH0tC7TA0mFoumCUdSLnGdjPaZHfBGoHvSuZ7bObHiFKhjXtECpI8/edE1RxbnO252Hr9cU0tPgmlJcgqVVjtgOMW9yOzDN/K8z1B80HEYdosBI3Og8pS2HrHSbaWOylqae4+lNFk1jr2B8CJ6apepTaTBJadrRf65IuHLY1g81374dDDo48PiEynYjjWwoaLmE2vxEXPohmqSZNzvIPwTrK7CbQDyge9RLmkHSeB16qsZk5QFfvEae/4QCi0cWASbaaix8JKicO06SD5CUpiMIRsDyNz0T/KTcZFjSqZpBAIPAh30UrUZAsIHDT0CQ9iSIuPD4Lpa/Z7hzO6bdeRGl6G6lMFom1tCNOYkFAfTBMCf7Mxp4peq+qG2LX8j3f5obMU+2Zgab3a5bVOuLEcY+xx5dIm8CBPyIUHk6yPAgSla+OBADmtJad4JPEyfJQGObeTpwjpojrj+5C6H4Y+x/Jw9yp+0Krs8gHkc2nVcq9qWMNBjczzjRI/fQfyCeTngK0HDlEpRlwxyjiajRJcXDhAMdBKi7tM7wPFjpQnV2PEEhpHMkdUpUY2fx/4T8j710R+kiEo+0M0xI0628UwI+aBT0B2Gx466fQUybk+7rovOs9QMByJmSzXIrSkCMtKI1LtKI1AwR1PN3QPrcpPE1mZMjAcrXTJB7zuthCtMEKbmuY8wTEEzEcJGl+qS7R7ONMyHMdoYzAnXgZsuzHCsepff6HPKfz6X9hVlEmSNt5EDqVNjomSOsG9uBQwSYkQDyAAjy9y8GOgWtNrC5ja17KbrlFd/IRtQaTHQeUpug0kADKZ2n8PM9PBL06ZAnKb2sb9Ivt1RKRLbyRz0ny4aWRTrkDV8EgeY6fHyR2ERrflp0KAIJ0Gnl7k01pgGOSXUHSEp1D+Vs8fATw8Z1UqA5geQk+AiVzL3SR4Hn4bdVymYPeBI8vmmeTwwaPQQYbcNM7kEe4fNSdQIgkGLcjG/mmKcZS/OIGoIIN7C+6k3FDSXDmfhw6o8LcX+hGmWfwgCZOrj48eSkaZJkGw0EnXlzUzc2Oa2oM+ibwJyOFpFxpGusG6opXtZNqgGJ/DETa459VUMfB0HwVrjqJ9oTBjb6+CrqkF1/Dl6JJOm0NFWhvAVHPcGmDe8nQcrcFqMAxn5QB7/ADWLZbTpKscP2yRaABuIv4gkquDJGD3JZscprYtu0uzqlUFpdAJsRFoMgm1rD1Kp/wDw/iWSR7OoAN5k8ojVPYTteXkZoGw3PX64K9pY1jrAgnlpK6kseXc5X3MexintqUxnfTdT/rEhwPmCY815uLzWNx4rWdtYb2lMskXiZ0jf0lZbG9iEA5LEbxbTbZLPp3F7DRz2tyLoO5HjBStdk7SB0SwxL2QHQ4eM+hCkMbTcY0PopN+B0r3JVKwIM2jht4WSjqYcNehE+YRK2G3mR6jwIuq6vSfMwY5k+5HfwLt5I1aDeBkcOSr643AnzBPqjvzGe7aIj6CBVpOyxb1nleYjyVYZZkZY4ldUqm4NIxfYbcmkr1ItjKLctBzkG/qmHuc3VpPP9xb0SdeSZJ+PrqrKa8oi4PwHfSOwB9B1JlB+6v3A8v5oL4J/ERyIkclw+2Oj2R5fNPGMPAjlI0wKk08V5eXwD0YVqM0Ly8lZgrGorQvLyAQmSdk/icGarBldw8haxXl5dfR7ycX5ObqNoqS8FDXpFjssyRrEdPFepgk6EmZjXyXV5Tn+tr6lY/pTD0r3g8jwI48+aM1gI1+ua8vKcth1uTawja/SOaNkNoBjw+K8vIwWrYEnQVuYWygCNdJGt736SuOpy4kRHAkAgc5XF5HItLoEN1ZKm4tNiY3Av+3VGdjBJOUCZaQJOu4/ZeXkFNpUguKbsEA3W4Nr6I+GxJBF7c9fL5ri8hdGqy3xZBGZpafMkqoxdOTPDbguLyrOd7kVGtiuNW/pqbdEP2ug038vBeXlo8DshUrR9eqbwHbD6ckAEbj4+q8vJ4qnaEluqZb0ftNn1gHQRMafmJXmdtNcHZ+62SOe1469FxeTR6rJ5ZOXTw8FTjKEOu4ZYL8w4A+hsOqRrNFnAC+hBg6Lq8qumc9VwCDag7zXAz+UkW8foIJxxFngtPhby4ry8i1phqQsZapaWE9qCLEHwS7qc31P1suryePzIEtmLVWHiOl0jUA4e73Li8tqaewGk1uK1WMO/XX5IBwfn0+a6vJozvkWWNI//9k="
        
        
    },
    {
      id: 2,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 3,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 4,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 5,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 6,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
  ]);
  return (
    <>
      <div className="mt-10 space-y-5 pt-24" id="projects">
        <div className="text-center "  >
          <p className="font-medium text-2xl">And threre is more!</p>
          <p className="text-gray-500 text-lg">Spline is constanly evolving</p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {projects.map((project) => (
           <Link color="foreground" href={project.projectUrl}> <div className="">
              <div className="border dark:border-gray-500 text-center dark:bg-black bg-white rounded-3xl p-5 ">
               <div className="flex justify-center items-center"><Image src={project.projectImage} className="w-full border mb-5" height={200} /></div>
                <div className="">
                  <p className="font-semibold">{project.projectName}</p>
                  <p className="text-gray-500">{project.projectDescription}</p>
                </div>
              </div>
            </div> </Link>
          ))}
        </div>
      </div>
    </>
  );
}

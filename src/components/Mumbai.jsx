import React, { useState } from "react";
import "./Mumbai.css";

const foodInfo = {
  "Pani Puri": {
    img: "https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg",
    description:
      "Crispy puris filled with spicy mint water, tamarind chutney, potatoes & chickpeas — Mumbai’s ultimate favourite!",
    details: [
      { label: "Best Place", value: "Bandra" },
      { label: "Price", value: "₹40 – ₹80" },
      { label: "Spice Level", value: "🌶️🌶️🌶️" },
    ],
  },
  "Frankie Rolls": {
    img: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
    description:
      "Soft tortilla stuffed with spicy filling, onions & chutney — a popular street grab-and-go meal.",
    details: [
      { label: "Best Place", value: "Bandra" },
      { label: "Price", value: "₹70 – ₹140" },
      { label: "Filling Option", value: "Paneer / Chicken / Veg" },
    ],
  },
  "Brun Maska with Chai": {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/17/5b/a8/cf/bun-maska-and-chai.jpg",
    description:
      "Fluffy bread with butter paired with Irani chai — a classic Mumbai breakfast.",
    details: [
      { label: "Best Place", value: "Bandra" },
      { label: "Price", value: "₹40 – ₹90" },
      { label: "Best Time", value: "Morning" },
    ],
  },
  "Bombay Sandwich": {
    img: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/garlic_bread_bombay_76544_16x9.jpg",
    description:
      "Triple-layered sandwich filled with veggies, chutney & masala — iconic Mumbai snack.",
    details: [
      { label: "Best Place", value: "CST" },
      { label: "Price", value: "₹60 – ₹120" },
      { label: "Speciality", value: "Chutney + Masala + Sev" },
    ],
  },
  Falooda: {
    img: "https://content.jdmagicbox.com/v2/comp/mumbai/b2/022pxx22.xx22.210903124742.s2b2/catalogue/a1-falooda-cawasji-patel-tank-mumbai-falooda-rabri-centres-fyf0nh9av5-250.jpg",
    description:
      "A luxurious dessert with ice cream, rose milk, noodles & basil seeds — sweet delight.",
    details: [
      { label: "Best Place", value: "CST" },
      { label: "Price", value: "₹80 – ₹200" },
      { label: "Best Season", value: "Summer" },
    ],
  },
  "Vada Pav": {
    img: "https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png",
    description:
      "Mumbai’s signature street burger — spicy batata vada inside pav with chutney.",
    details: [
      { label: "Best Place", value: "CST" },
      { label: "Price", value: "₹20 – ₹60" },
      { label: "Spice Level", value: "🌶️🌶️" },
    ],
  },
  "Seekh Kebab": {
    img: "https://cdn.pixabay.com/photo/2018/07/18/19/12/beef-3547078_1280.jpg",
    description:
      "Juicy minced meat grilled on skewers — aromatic, spicy & smoky.",
    details: [
      { label: "Best Place", value: "Mohammed Ali Road" },
      { label: "Price", value: "₹120 – ₹350" },
      { label: "Best Time", value: "Evening" },
    ],
  },
  "Malpua with Rabdi": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbOcnhlklsrSSRo3DxoyoQllZbt0UsjYy4A&s",
    description:
      "Crispy sweet malpua topped with thick rabdi — festive special delicacy.",
    details: [
      { label: "Best Place", value: "Mohammed Ali Road" },
      { label: "Price", value: "₹100 – ₹250" },
      { label: "Occasion", value: "Ramadan" },
    ],
  },
  nihari: {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/03/a3/fe/nalli-nihari.jpg",
    description:
      "Rich & slow-cooked meat stew — melt-in-mouth texture with deep spices.",
    details: [
      { label: "Best Place", value: "Mohammed Ali Road" },
      { label: "Price", value: "₹150 – ₹300" },
      { label: "Best Time", value: "Late Night" },
    ],
  },
    "Bhel Puri": {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUUExMWFhUXGSEbGRgYGCAfIBsdHh8aHRgfGx0gHSggHR0nHx8bIjEiJSorLi4uHiAzODMtNygtLysBCgoKDg0OGxAQGy0mICUvMC0yLi8tLS0tLy0vLS0tLS4yLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLf/AABEIARMAtwMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABCEAACAQIEBAQDBgQDBwQDAAABAhEDIQAEEjEFIkFRBhNhcTKBkQcUQlKhsSNiwfAz0eEVJENTcoKSssLS8RZjc//EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFAAYH/8QANREAAQMCBAQEBgIDAQEAAwAAAQACEQMhBBIxQVFhcfATIoGRobHB0eHxBTIUI0JSMyRykv/aAAwDAQACEQMRAD8AKUKxqOTuzGB7nf2AGMBlU1608bD6lbwpClTvtc/QKXixZ6lPUdXlUxboSIVQPQtJxovqQxzweny/Kzi3zBsaX9SljiWb+60y2+YrTfsO+MJk4l5b/wADfigVHFtzqljLqXbmMlupucPkQIaEoSpwFkjrAvgRmJUSpko9Y2H0xQuMKCpaeYAEdOvY/wCeIgqE9eGeIrVWI/iIP/NT8Q98aOFrEmR/ZvxCqLWVPxLT1ZYtu+VcUye9F+aiT/0mUxsGNkZh2QP/APJKdLJ1KYpE1WBEgTM7H0jGViMPXdWDmG1vRaFKpTDIcEvZHOFkGuxi+NGUrEr37QeKnM/dlPKq0zbpvp/pgV2iTunMOxtQ5TZKVVgGCrG45sQLgpus4MeGUzpur9dEZ4Z20xYkRJ6/LApgEjVP5fHeG13ZRxX2S4eWLaSSg+I++2Ic8wHRdFwuBzVSxjvLumDMVsvUyZ8vKutSnA8xdg5vc9rbYJNR9yLJdtPK4tZqEIpO9MeZXU6nUFJ6qZvgdRlso3T2ExRptNavc6BScGV1LVkM6R+G8A4ioJlu6t/HmCapu02hEPDmcM16hkiJk905/wB1GHcIwtbJXn/5aq2o52XRaf8AaKi6qNbTqFWnAPZgJF+gicZ/8rRe5rXNOhg+qB/HVGiWnqkbJiqtJWpITWqAq/QGfxAnGO8MfULXHyi4+y1ZLWzF0e8PZOpRYAtrYqBy/hG5+uFsU4OPlVmnMLqzlR5jO+kBixVJ6KCN/WcKVIYA0G2vqiZTEqLhtUE6xYA2H+p363741nP8MQ3+7rf/AKj7oeXPb/ganifsFLkc3rdtOxRY9uaD9TOC495oYdjBwHyWO+pNV55/hIvinNmpmn7KdI+WOwNPJQHO6SqGXKplyQZHTrgzkAovl8gfKNXpMGes4Xc4kwoX3mEAxsRB/p88VFrLlxmKKroCGQygt6H8Q+uCvjbsqAr/AATNmlVRwYhr+3X9MUpP8OoHLjomrjQBfN05gVMqYn8yNqT52xu+IGUwTp9jCuxIXhREdjUfmCkBVOxJ7+2B4mq5ghu6eosDjdMXFuE0WEhdDRun6yNjhNuKqM1umDQa7SyTfGOUB8gorBQHS+/KQZPvqnGgKodTDiow1Bz6paJS3SpNpa1lOOJEwmqVKoKbiRYH1RpuF5jMVKKNTM6QdIEMFPUzGLikRZFxGIOIyl9hy1Uo4WfMdaTaVT4tZg+g9ThV1iQ7VabWwA6hIbuquQzrjzKVMtpe5B6kdTiXNJggquErBtV1OmJJ3OvNfKxq6KWiGHLqJN9+9h7Y4/8AoKWHxP8AQ4XnVeZPLmmzK7sBaymJBn+sYsHsiSEOlhKlKoaZdAkfFE3QUaWZUGQKZvM8ziPrfDGGeSy6R/maNGm+Ka0/wRnk4nwsZeo4FVBpnqGXY/PBnMbUYQdD3K8/Teab5CTqNHMZesaFYlAW0i/Nb4SPQ481jcMKRNri/Ir0VGsKjQRojtLL0srTZ55/hLdSSeX3M4zBVNfyx+EYDLdcZio1OkalNpqMbvUMADqFX3xRga9+R4twH3RTKXeLceLL5aDTTkjV+dYHKR0M/pjcw+EDTndcpOtXBENRnwrmVZKRXbSUPujG30jFP5mmTRD+SxHH/YUk8VMZirO4qHBaF6LY4IJUuUQsYG9/0BJxVyEUUy2YbQ1OeXeO0HCzmiZUK9X4tqpCmEUEbt3jbEEEgcFyHsdh0G3zOOXKTLKSwA6nFXGBK5OLZtagrVD+EaR8oB+UsfocaWLqTTjkPfX6K7BELNPD9UpSSOtz74tiXE1StKj/AFTJk84Tdmkz9B6YWIRlD4qqJmKTU0b+Kn8RR1aBDj303j+XDuCOcOYeqG95pva4GNki5Wk1SQDI39zGDnUQLrQoNdWDxmtr1hH8/wCKKjtTqhgKqiLC14EXtFp9zizz4mqK40m02tbqqTUHqhnUlnElwBIAGxnr1JOKFggakpgCq8Oc0gAQAO91Hlaeqm1QHSVsQNzM6sUzQUSiw1KZqNtGvEq/xHMZVqaLRRlqHdyTHrjspJvohtqB0tm50PPjK44dQWdLKzMxhH7+0wDiuR5cMosnKVShSa4VLkb98FW8QUzl6Qy5PO7eY4/KPwA+p3+WNDLkblXlMbUD6pymQufB3iR8lXDidBs49O49RiWOgpF7ZW4vXynEqKFm5t0qoOZff/XFqtFlVuVwkKKNZ9J0hUc14Rq+bqaK1BQCFX8TDqw39hjAd/FPoz4d/gY4cPithn8gx4h1lQypemrUzlqhYsdOpIGkXHsI2xlVv47E582U6bAn9p3x6bv+h7pUqZGjXXSBDdl5Sf8Apnln0Mqe649TReyrtB+CxqzXs3kIj4a4M9GmySHVmL0XAjnURUpsN0eADpPVeoxatQFRhpu0PzSbjeUq+Kx/GFUCz/8AqFiMZeEYWNNF2rfkuK44XmyrBhv6idxB/TFngjRDcFeVrCP77YUIVV1TF74glcpZ/fFVyt8PBDKVksTCgdSf2wajTH/0f/UfNcFN4g4iKeXqKhsBpB/M3Ms/NmqN7IMFZNZwncyelj8o/wD6RmarPaDNYU2afyqJ/TGr4IqXyyjeIW7opl+GZ9/hpZg+1Jh+pEY7/BGuVd/kHir/AAvwtnRVD/d6ykX1FCT7YIaVRjfK34j7qmdrjc/NecU8LZgnXTytamSSWHltAnqsD4T26e2LuovN4+Sdw1enlyTB47QhFHgjaylWaRidVQFRbcC1ycAyPAkggdE/So0ar8mb1kFT0s+KauKLvTLSrgGxXoPX1wFzjNk6zwmAwfMNFLk6SPSBkU2B0sLy0yQ3taPniZA1TGGHiN/82vzUD1Gq+XS1aaamNTRCyZOw2xIIsJS1UPeC1rbA6xqjvGKq5an5cnyzDKjXaehW/KD1xam1xcSdNlP8hiaeGoim0guMjp1+iSszXao7O5lmMk4Oea8uo9GIXI7wTiNagZpOR3XofliweQVBYCnLhvjqqLFGBG7K1v1xLq4aPMuZQc42VvMfaPmidNJubtGq30ws7EPJ8osjihTaJcUm8I4igISrqAP/ABF+JT0MdR3GAtDN7c024khaNks41GKlQa6ZAFYp8NWkYCVkPSrTMesb7Y0ACWeb34jisyo0TbT5ID424cut1BDTDBhs4IlW9GI/qDthGoGudLrOG/HqqAEJHpIyG4tO+B1KZhcQi1CrN8IObCHCtKcDgzZQifCuE1a1qVJqrA3AsoP87mAO8TOG6OAq1PMbBcnDh/hVaalsxmAKrCD5dyq9VQ7KYtMYbd/Hio4Z3eUf8jT1O/sFcHgpG4XkFEDLCpG3m8w7DlPLtbbD1Gkyldgg8dT7ldBVhM5pEU0SmOyqB+2DlxOpUZAuhnah/EccuyqRcy/5j9ccohTJmH/MccuhSisx3g+4xMwohUM54fydb/FytMk/iC6T9RBxJOb+1+t1dtR7DLSgPF/s3y9UlqNV6bdjzL/Q/rhd2HpnktMfzFZzpqielvx8EncZ8L53KpBo+dTWYZOaAb3WA31BGI/xBY6x3p+1J/l6mQ02WB9T7pOr1GdpcyfXEEFJTN1H5XbEKFao5XHQulFuF5E1HCiw3Y9gNzgdR2USi0mF7oXVbPIay0QGKaohPiboL/1wm4PILhrzTFWoAIFltnDOFLk6HJTpKIBMAljMbk3OOdSrR/Ye35WeXSZK/P6jErVC0H7O+IealTKVeZSCUn6MB9f1OHsJUzAsKUxTP+ghXH6zJSS3MuoMfzBXKEH1BUtP82AVR5gDvbv5KrWh7DG1/v8AdAXzSPB69bwfr1+d8BLH0/6/j8IMInwDhLZmoUoeYxsWFoUd2JMAf2MSwVX6MHXb5fcqpIGqfsl4WymWvWZsxU/JqOgfLr87emHqdMM1ieirroiWY4w5GlYRBYKggD6YIXTqpDIVLWTiJVoUqDEgrlOlPEqFYp0MSqqwlDEyqqwlDHSuUy0cdKle+ViZULlqWOUQvlkYlQgfHvCGVzcl00VP+Ylj8+jfOcSTNjdcCRos08Q+Cq+UliBUpf8AMUbD+Yfh97jAnU923RWv4oUEXAQilE6VUUsnVfY1G0z/ACrvHzP6YUr+Z0JyiMtOeKOcF8NNlKFPOArWLspA03WdovcYRxgLqYc10Qkaji51gmDJ+Ja2YRqYTXW1EhARAQG0n2jFadSrV8gPC+2iggN1WQRhwrVR3wZU05yiQd2j5EEYLhnRVCHWE0ymjxPkSVkLKmrVViOznl/WcGxYmmSNr+xlK4WM4B3t7pf8IeCXrqK+ZJo5fvHPU9EB2H8x+QPRhtMAS/2+/c9NUsX7NT8mdSlTFHLIKNEdF3Pqx3JPc3xznyubT3KqBsUlFhSJjl0KekL47MJy7qYtKI0aGLKit08v6YtKqrCJbAzXph2UuE9VPhuiQCvKtUKJAk9pxTFYpmHaHO3MIDjC74TnadVtGrSxViBabbn1jAH4ynUZFJ9/iN0ahBdcSqFLij06VapWKHyXK23YXj0Fr/Tvhan/ACRlrSJMwba9Pb5J52DFyOoRDh/E0qqGXqJE/I/1GNdrw7RZ7mwr2mcXlVXJpYmVVeeXjly90dCJGOXJF8W/Z8rhquUAV9zT2Df9P5T+ntirmB3VXa+LJMytNNNCnmFYKpfWkQdQYnSZ23/TGXi5pid06+pFIEJ1qcSFXJill1krUAVBcgTb6A4yRULwWEII/wDS9zXB6WSDZh2YVngcp2HUYtWDqbQ1p8yoRmWRKfrjRK1UxeC8v/vSu3w0QXceigwPm0D54YwzfPm4IOIdFPqtKocLVadOrmtgNS0vzuxLEsPyiYA/pu5Ai6QzEGGqhxLiDVmltui9AMVcVZrIVQYpKvCkprjlynW2JBXapd8UZ+sjL5ZKBYJbSCJOqBJ9AZAGAV62UiFs/wAbgWVw7MdO9Ex+FMypoCrXq/xahgUxYmDAsfxMT+oxkVa7mAhrjc6AXPrdAOBbReWATG5+3JE+PB6dTyk1KtWiVYQSQWtPcETM7GN98Be57XZQTIAsS76/NWY1rm5iBryQl81NSurF6QoUwpYk6WNiIEczA7kmB6zhF7SGy6CXHTfpy43CbpkOIDbwqHhXO1KtZw1RfLk6VYy5BJWwi97WsLY1zXLaAZEkRHI7cVl1sKKjzspK+dTLls3TWdLWZFJQzysHaADPYbHvhc161Z8xE+35RcPg/DHnInkrfhSjWq1K1arpqKSrJTHUsxPW1rHFajWGCB5useyPMeXZFeJ02ZVqpNOov/DmT0JGkE7xiuExTqbgWGeUyqVcO14h3urHh/jhr0C8aGAvrBt0mLEr7Y9D/nUtJv7xtdZLsLV2CvcP4lULAVEQhtnpNqEdNQIkTv1xLcVDyypA6ITaNQiSEWBB2M+364ba4OEhUI4r7Ti0qIX2nHSohLXjLwgucTUkJXW6t39G9PXpilSmKrcpVw4gRsg+Qz1DI0h5hWnV2KzLT2A3JxmeB4Tb6qwvYaL7P5PMZxVdU5DcKSLztP74z34eo/zBEzAWWQ0lJgRPYd8PxNgtLRan4J4ItCga1ccszH/MYfCvqim57tbZcaVKmKbIOvfY91m1qpqPtoFNxLiDVnLMfYdsVJUtZCqriiJCnp08QuXV+U6TDGFMbn0wMVmZiwESNlOR0TFlfzeWqJ5Xl0yzmTb+W56dDbGM7H1nVHgCWnTXQWm3HitBmGp5RmMEaofxPwfVzFLXUeGpk6lWAoDRuSNTPYE/TA6NQtpuyizePHgOf4TjMV4b7f8ASl8GeFqdB3rMXevQJCgpA1kH4Qbkx+4ODNrvylzWwdANb/rql8QQ43NnXJ75poqcTSlVWrVIV2qeVKkkFQ4IFwJM3NoEwCcBNTLWESb36Ayd5VDTPhEHQCb9EO8YrTzDDy6bGqxAVgdLFbmAOswBfYNO2LVaja1SMvTmk8JXaN/glvwZwr7vmKrVDChWUmZnSQWJAGkgX23nA31mvAzfDuTMR8k66n5swF/umTMohzDakc0KYVoVGIDNPwos6iI7Ei3pirCHv3AJjmDFwPlKvcM2nvVV/D9Q1s3Wq0l1U5UM7sQByzyrFnEm57D0xzKENBgam52nX8ftTVcAAJvw4q9mKWsVKtFTTakxpgNzFmhTfSYUXHf9MUyii7OwReOPDp8Lc1VtTOMrjO6zXg/Fa9eo+lmUrIZjZQJhpgie1vTDmIpsac4Gom2qh58VhYOnqmfg2RzCsXFUNSWGd7qo/Op1Ec0CbTvfA4fWaMpOUcbftZdOnWwtTLYjr8fRe5Lxc9XOkUrU2CiB+495j5Y1cC9zWS46n2U1w14lv7T9lM0ryAwJG8f540qdRtRuZuiUc0tMFWRi6quxjlyTvtC8GrnE82kAuZpjlb8w6q3oeh6H5zz2io3I5S05TKUeA+PK6N5VdEp6BF5G1o97YxcSKtL+t/RGLQFD4Q8IeZUmp/DRRqe/Pp7SLJO3fe9saFFonyotZ5jzeyYeM58VGCqAtNBpRRYACwwVzpQWNi6G6sDJRgpaWKSpUzmYUbkwPnitR0NLuClokwjOYytSpkzTpMFqUGUg936AdtgZ9cedymTWJgZj180T7LTYQ0hpEyPkpcnkc2WvVEJTKQJMlrgs5UAkNaF9ZwSnTBaS4EmIsYi8i+/PmuqVGAgC157G3qrOYytdMqKVMzWAQVHYBUBAGpiSb26qDtiXUg0+XytFzwt677wNtVQPDjmPOON/tzXfEaWnNU66PKsIZFUGYDcwIvuQJIm3yxWtU/3Z6bSTtEdx8V1MTSyutB3QTxkstl0q06lOgrgF+xkE3I5rgn6xiKbMQXZ6oyjQfU8dUOtiqdJv/on275K8nFXoIz1AjqkJTdIPPEkkgkKYNrCQZxIq1GUpEE6chE8Ph0ulKpo0qviOzEH1+yFcWem9Ok9KrVqGYYLEAN8RhriDaSw6+mBMZSYY359/NaLaviNDhGU6I/4f4g7UZN22kyLDVsZEibAz33uTepVLGgCJPE7d6IYYC4nZWjlgupGYBCbELCg2kLDWv6RM9MUqAzD32JjS08oMgiOnortdPmaL9b/JD+L8NrVWqNQrNfQagCrEAfEpMidIO5Gy+mCvYxwc8iQNeGnfAyhiWQBAJ9+/dUeH8AoU/wDd5lGYuJuwi5BIAEWAgEyPriPFLqnmIjWNe/SRzRrhsjXRUftCywqUEDZnyi9QJvpQIJGnSJ3jVE9O04PRqsL84adDziLdB2UJzTBE8PVUKGQ+60NS6ahYqlNqR+N1lgOYwBa8TG+2Iex1SXAwCpaQ2xFwidXxAlEtWphUYhPOpOQpuY1Ko3bf3thnB4lwqZRpN7a9I9yl8VSGSTrtfZPNCsGAIuDjfWTKnBxyldg45csy+1Lwy4P3rLpJMLVS9+isI67A+kdsVqUhVHMfFFpVTTsdFeOV+5ZZcvM1X567Tcsfw+wFvqeuKf1aG98++EKT53k7IM7YESjKPVipKldjMKvxGB1Pb3wF9RrNSiNY5/8AUSreXy5enrlJJ5ZcRETM3Bkbe2E6uMc2q0D+sGeqKygDTJOuya/CS0giqiPrZfNc9CSADBMEnoNoAwEhrjABtJsR6gdeeiI4PDZJHBXqz1qwqIhCrtOmymYYFZBb6j+uFh4uIBmzeXx19vor5adKCdVR8QOwUnWAtPoW2MWBi+meh9YnbC1UPLpOgMRMke3wk9ESll0GpXvCOIDK5KgzMCzBVVqk3LN1YCQBJ3AsPfD7XmiAWgCYj98th7IL2+K8j3/SCcTpPm6YbOVRDQadNBa4klQbneNRvymLHFKtRxuCSem3enzVTgxVMNsAuOGcGzLRl2UJlkfU76iCTcEAEWB2sTv6DFabRUs60H099J7MoFbDgNa2xEj1F7fJeZnwhT+8CslY06alSqgaubUNMdBckgQZ1bdyl4bp6fX3smCSRlhW+McZChFpqQGDsToIgoYaBy2ki+AjDjENLqhIA06kmfTTn6p/CUhB5QPcfNDfEamqgRajOUXSgVSHqVpMW/EFCwTNoaZIw22ixrswvaAYi2k+sa8uCPhcjJLxEnjYD062EI3wLJ51skqJ5NPy7EWZSoAN9DRr6G+95x3hOqSQ7yiflpZIYmrQbVzCSTfpfmgxzBy9WnXcjyBqDHS7FdxIVQ2kGDLOB2OkmArh6PlIBvtG45yq1qsmAFX+0LKVitMUy7Bx5hCKDBFhAtvB6WnfF6DQ2ATr6d9FGaQeS4fh+ZqZahRy1UIRLlrGbGfkWJEwRY3wRr8ogid4n5dFwDc0n1Q2tkg5WqdP8QlNBggOgvzr/wAOYkRMyLCMWbVytzN7nkorsDjl3WhcBzI0KhIDBRYEEdRbuLY18JjKeIEM1CyK9B1I+ZHEw4gqUDHLl61MEQRbHLlmHEc0ajsx6nC5KaaICH1GwMlXURqYqSuXeXo6qYQhmNYlyBuFUQsH3999sYmLfnqZh/ytLDNytnijFTKZfMNQRQ3lKC2gghTogtPzibbkjCVF1Zji7lufkeBTNQjw435apl8p1UVRC0ys6IhywAgG9lA1GD1I7XtUzUqRdxI4E8/lbXohtc1xyxfjy+6IcJptVrsRXBSx8tRAAi8wQSSSDMRYjrhzCtGJefNYagadNvlB90riT4bAMt+J7KHcdNB80pDlBTMOyfiiSywN/wDM+hwvVfSdiXRZsX+/0+KijQc1uc6nT6JSz3ERWqSabjLLVK6mBKdGOpT1i4EdvTENploDm6XjkOCdLgBB1TWM1So00qBWh0LgRpaB/wAMoZ3JtA3BwR3+u0STfgeltvtyQQTU8psBbiOvVTvWFWihesFJ0lhI1JpadJCzeRBmxiIxZ7gGgvqDb09IPud4VWt85yt7jv7pf45xTKUqiUqTXJFqcapGzBRdmsRERzE7gYkwQfCEjjAj3tdS1rxd9ipP9vIjhmdzUgMA5UmJdACQtroZIMibxigD2Q4A+8+9vj6q4aHAt20tP35qvluCs9Y1qqgp/F0qHIJV9iGDCZvaT8iMc/Ef8si3O3p6/Io76gDQGmNNvwn4ZwIDSRLltLECwkASd42tJvG+DnEuDDTa25ME9bExy4SsrwpIeTzWeeKc9UpuA6rToUwps0NMwGHQjTqsCSZMwLhTD0HxE3O2wH3JvJT5cwifj9OiC5bxma9VUakdCqU8xC0BW0yGWDquN79bHbDzsPlZJN9psUFzm09SL8eKaMrVNCoqKtPyhSYq8qPMkhQsAwAJBmbiIAvC+XIZm5n5fX6KxcHC/JI/jHK08vUSpSUoWQE6VKhyztrhdu3tYdBhimajxldzXNaC62qu8L8X1ECKlNGlSSopyxIux1gyJ32gbYuadODlsY15+nFaVf8Aj2MpCo90nYbJw8Icar5io7OvloBAp9ZJ3MxHtGNLAtIaSXSvLYkiRAhOtM4eS6lxy5ZDUbChTqqZl4BOBlwUwu8hwtswUWgZaJqazAHe3a4iDJjGdUNfOZMN6hMt8LLpJR3JZKrRRlaKrqGVNIiQA0WJvzEbWtN+mXiXNqkAneLm3DkmKWdguLclZ8J0/K1h10sdTFJGzGX2JhpAJC8tutjiXVcu8xb0HDjB0V3DMRAj7pr4pw2jWeahmQJGqAv4em5sbemGqlGm+v4jjrE302jnobINKtUZTyt/am4w60yjU3CJRguFA5lIMC1wOsgjpg+MqZHgs0AiBvNh3zQKFMvBDtTpPJLPC+K5d61WnChrFNQ3ndbLBKte9zq9Jxnto+G3NEGbb/IRa0et1pVsLWY0Egx3z3UPiVnBajSQlNBbkEAEKCCpAgMTt3IxUlzqp89hGvRVptYKYzDW3xX2eTQ2TIqc0EGJBMpJ1rN13sRY9t8NloAkQZ9SPpcqtOl4lNxMjLHQ7cNdESo8Gp0Xq1ypZ3EFhMgFrDcgEMSAANo3icVq+SlBbbgOf19EFjiTEq/4r8N5ZqfneUPMprZouACGMT1FyJ64fr0mU6WanaNu/wBpShWe6plcZlLGh6iVqaooLUwEraoJKg30WgjUwPp3jCRr07u05b279gn2AMe2eOnfRVqPFGB/3iWlyivSSdJHWoAJggyADuD8wNwlN4zNBPfxtzTRIIytIaeBOvQ3GqNcG4iFRqh1MlRhTYmYkLGpJYggiIje3U4LMMIItfvr1We8HNHBLXjrjIqL93p0SwYDUgdVhbtJF4YnUDG2kTtgtEz5h5Rtbv4KrqZIsb8dfmlnhWXzJ/hJRFOgpvUJXludTEzBi9h1GLvDHDM4yeHeyXGBa52aqST8CmjwTQrjOOKnwFQaYYA8hZi5BmGPKBqG+pTiCWnLGu6ayhogaRaE45vh6Zik1OooZHBW49IkdiO+L0nEEOVHeWY1WOcI4O1GuaVdnpVkMjQ13UQVF1I0ahvBv7YnF1HMbLWyO/imBiPFcGl19t08ZritRc7R50DVFAamBdQOpbSJk7HY3wb+OcS4u9Fn4oCIWgZWrIxtLOCuA45SsdqthMlOqtUYRfAzdSj/AIXr06NJ3rugpNdj+JIjTFryCTbaJxlV6rKj/DcLfVM02Oa2R2EYTiNOqwNIh10EHeAA3LpMfEb+4E4RfUcKbg4cLeoH1umGMhw72VscAnNUwZKkS+gFQCCYIaSVlQUNxqgGZ3bpUGOf4cWH5+o05bpWs4luaSPt380QTMj741OSGpKHYmwi4ntc2+Z+bFNrWPdUt79jv3YNM/4wdsTA4z2EP4xXqZhHoprpkjlcTzEFTEgTBgzbrhKlWe59gek6/m88UekGUXB5g3SZlPDOdbMh20Noa5JJ1FQbGQIECJOwiJGDVHCpTIEnb24nkOi1a/8AJU8kMESOkTw1/ad8gKiqy0yIVRqWdRQGCEFjNiSJ9B0nCbGP8OHTpe23sfl04nGqOaXzz+PHv8KhwnhZY1KlJlq1OhaRpABVhBMrInpMRc7BmgxopFrNIme9ftCnF4gtyh4I5D3757L2h5y0QK4ltRLAm1idJXqZMxhDHzUjKTHCI6Rx302XNq5vM1vLX5odxLj9Ra75Y61RDcghF5Y1TUgkbN0E7dJw5QpuaMrnTFo6coCH4efzuETpeZ76qJzJ8ylWBpsx06WgF/ibTuWsbE7SR2xNdrQwgagzPSZWdjW4g1Q4TlAHpt8d0J8ZVGFGjXKqCGUMI0jS1n1AfGZ67CbdsVwmIL6hpiIgxG5+i0fDrNk1OPfTojee4MiZRWVhTBTkiW1PUUNqbmIcggEEWv1weoWiA4W759J6olOo4gtABPPb4W+aVcvmGD6K9Jk2hT6WplSAQRubRsTbEPYWS6m630+BWbinOpPz0wZNiIsSmfhXDj/goxDCmSyQQA5/wwSR1uTfp0nAQA+HEXvCeo1XmmHVNd1zS44KVYk6kKMKITRZV5gCW2IYmbCBpAPfFzTcHSOHJXlpEFTrxqq7VHNRKdGmJUKy/wARSgaQSwIvI6b+hxd5JIAOv52QwBCWuLcJqVsy9Wk8Myr8dwyhaZ0SSSAQZMC59ziadVoY1jr96lDNKH5gV35zuaRKRmaNQh07ITcDmMxMj2PfBMNUGHeQBY3CnE0/EZmWm5GpKq0RImD0x6FjszQVikQr6VMWXBY9WbCRTyqVl1A6m0rETMQenv7YVrzAym6IwiboxV8t6dOkDLsgVNUw5tAYxC3sDHp6nJyve8uNu/gU9Iay1wm/wnklWjTkBAiaqgPcgGDe5ut9rbY4Bj3ZiRAnoZ/MaoIcf6gXPf3V3K8Uq0mWabPrZZIaFUEBRvc9BeBtGK4Wu5gG95nbQAD4xfkma1CnUBgxAO0kxf0+KrcZB+9I5ZtJQ8qxALHRL9RHK0f/AK8S8uPlcbPv0OnobacV1F4bRI3Eewv+PVD+HZ/NiujCnppJIZapg1NMiUOkkkCDJgWHyvQyUWtLnfeemtvymKzMO+kYJzHhoP3ylMC+bUeo9JJ1Fdzbvf3UqYHzO+OZSrVS97AIJnkbenLsLPLmMAa/b3QrhfDaoeo7VFR3MVhTA+OV0kibOEPSwHcnEvY53kcY6cj6Xv6QiZ2gSBPCeHYV/KV6WRoLXY3raZL2bSBYmB6zHSYudzsaMNTEf9bHYINYurPLTo2dNJVY+IUfVoJUloAcXaTaAY9Rv0GEKstfA35T+uETwlEw4D2zGnp3xSH4i8RU6g0tTUMG5XAOodypi5ve/thmjSqZLiJ+PxWi3DGZbdFOJ0Vy+SQumgcr0iqzoaFIlgSSde7FUmYsIGNGzwWv0IiOPt90th3B1WPfb4H8qi4fMKuYqMGBGtaUhvh0kLcaQXBiTfmEXxm08O2gCGCB38uHurVMzjlbeOHDii1VRVqLl1p1SqoBSY/AhpqrCDM3I0g+rXgYvlf5nTNrd7XHyKWFVoidd+/VUfEXClGZpVSxaspRTpiFLeWUO3wBTER+L0OLeJLC13dtFdjrENR3wy0eYA4Z9bCozG/mA80X23jsIHTFXNIOioSIQLxLkM2c3UqU4KeWGUMNStZdaNI66SB6kG3Un+smDqdeWwVJIb090T4ZlHz6eY+ikWGkQNTaQRMi25HXYD1OBBt9VYuDdEWqeDW0RTzBIMk6xq1SIHNJgCO3U4N/jzedeEJGvnqAhphJHGsgcpWD16enUANd2BcfCdWx2XeCI2vgb6T3ANCthW1A0h5v1Rbhni8JRlaZIDsCNoUG+kn4oJifTGjTxPgsDI0iUVv8eahJJjgnnJZtXUMplWAIPcG4xqghwkLJc0tJBWTZg4RKeXuQy/mOEAkk7TH64BWqZWEjVXa2SAU/UOBAKhNMPVRRzFQdIVmCxJgGCALbDc2xlCq50kCTvHqPomgGt8s2V7IZdCjhqhKuAhWByhSSeYEfEomTG+K+XLkB119Lkew+ysC+m8PaNLj7+5Q/iHDlGnzCWZ2lgDpGqP4QNPmDORywbbWmMDeS05Ylx1nblGyYbWJ0MDb631RZMoH0PTTlMEKOUAxJDKZAbptNyDGGW4QmHsHPW1gLbjXgsmtiDnyP0BP4M2McuICq8QzpNSmfPKkmNEAGeu8Dp0P+ilTxH1MzTptw+UT14XT9CpSNMwAefd/dH6ecp0qKvrDKInSQS02m0A2vYRvjWFWnQohw0G3fulMjqjyN0N4ZmPNJZlCGpUYC5BIhZYg31CNIEWj1wuzLULS+ziT6Sb/DlbREdLZA0AHfugPGsycxnFdtKUaBgatgRImPTf0MYDUccRUcSco/qDyUVaowtFtpJuq3Hsu+ap00WmDzqVJIiRzgvqIMQGsvT3nFaVFlENqNOljJ1G8/NAw2PrPrw6I4fbn1Qmrw/MaQEo0NSqIqggqQdUC4JJNz7dcXfjKc5nbGNO/uvVUsQGtLZN9vaTt+1GeH5vN+XlK2mlRpyzkXNTTBCT+GDpkeoPTBG4ljaZLNTOtr+qycVTZUqF4tO2tvkr/D6GXptmFpU2JQEHVzatIiynSpCjSOXfvYzDa5Nnd/tUD3NABKg4BlHy6+dVc1FqK2hmEGl5ks4+JhDELZZuDa+K+L4rixoI+R29PnCh9OCDKqcTr1ai+cWRGqQxQPdRTfWNOwqQoVeUfivNjhhoaAQe/yuBjyjZCPENNc1UStktS1yNTqAUOsxpuRBYNqE9bYt4gH9vvC7KQCE18FaAA1V6leQ1WobCFsojaNJ3j53xnV6rg/yi3074ojWS3vdc8Ozpp1TVp0gUckfwiSHi5emJuCCCQswdXbDJa6zh9vvdBJZ/QmDstA4XmhUVWVpU9f7+WGKTg6L2S72kTxVnP5JXUhveex6EeuC1KcIbHLFPEpKGvlXpAVU5xUp8usFpBJ6z6bEx0wu1pYQXGR336LQ8QuEtMbJ44FnVNGnpsugQOwi2PQMcMohYLwcxlIOdJ6b9AMZ7zZOhNHgzhTJmOaCypLj8hb4Otzv7fLGbWqueCGjTvvh6I+QAAlO3C83pLMWlCLi8iNvQEx9ZjCWDxAp5nvd5Y5zbTkCYPror1KJs0C89+yW806tUdqlXyqTc71HhdbNyhSSbIqzA6974KxjqwdmPTmTy9IhDxL3scxrNfkB3KgzyvUrzSg06KSCDaRtzErcCD8vWcJMDvNe/Gfl3z0RXYWcS2o/SLddL6+nXkjXhniJh6al6rk69JABE7gmYsQRPQ7+ungKpaw02ifpx749UpjsM7MX98PyoPFGXfKq2a0q5m8LdAdihJsZgn0GAVKBDnGYzH2XYTyubTOhKWM14or0KlNm8mqtWG5VFyfiKkGTFtxeMHqsDTLdY6r1Lf42g+mchIIOnf0TQvEWrUnYaUUQwJRlbc3DbMpAIJE9RGE6rnGmYGvAXvrfhrxWRlbTfB252VTLcHNUP5jNmBANOp8IOrmPQSIiHBMgkHbBalMuBH/AFtw667pJ2KYHB2SRsIn5rnjrIgpKH8vNqy6bFg4c6CQNoiZ+ZxBptc0Q2SNRsefLSVfChsuqEAA+4Kkq5QpVPl1mYVFlqTAEKyjliw03gWOxvgZo06jcm2vMHgZEJvxHAZiNLTshdfjWmowpT5SsVZnGmKihhA6shtN+gjfBm4dtFsC95BsdoStTGMNQNqEAkfn0PBC8z4x8qk7U0VhVchTt6km2pnboPXfBabHGq7ayBSpvPne63JGfDZouy06z+ZT0jy76SjidQJUi8EAEeuB4VlNlU5hBPO0be6I7EvfLTAIPuF7xvw41KumaoO1UUgwNCodUqxJcId5uYBmYiRjTfRbk8vVdTq3hw13VXhb0Cz5mgSGImpSMal0EgkDe0MPlOM6oXC0XHdj2U1knVB6mY15ioikB3BcMWhCGOqyqSxGsNMaSTPTEwGsFRx/YUEOdLG2j3UWePnZpVSoKhfTqemWOlVGggMQCZOrUpmIF74tUdDQTqqU6LWvLzstY4Pllo0lRdlAF8FpNDWIL3FzpRKkSTGCtkmEM2Czb7V+HgPTrX5gaTwSJHxKCR0s2Csa2S0rpMITwbiwAC9hH0w+x4hKuZdUDVCVadRhKqwJA/SPUGD8sJ1hLTeEyzVEPBOdzJzdTlJFaIaOZIDESYjSbyDuSO+M2BkDaZ83c6/ZOE7uFk3541/MVnaSimKSiWckEarX5e9t8JV6TqgIeb7a7XmPqudXFJvkYTPsPVKHAMh95zL0ar6SaZmRBChkFlPZQR8++D0qYyTsI/feqXqOfVqZ3iE159loU6VFQTRpIDUYNzQqkAmLXIi4jpYHAnjxaukC3uR7HXUjknqIMTN9BKCeFM5mKOcp1a9NQtYEBxcRcwCD3A3t6CZw3TBw3m2jflvw+qcx2Ba6mQx0luo3HfJOfEsylQE13mkaesKota5JPoN72+hwpWLqjiahJFiMom/fe6zKbfDIyC4MXWa8Q4OlSs/l0yiU1JM2GxYAW3ZiNp3wSiaxZD7ddvvv2E+/+QytyNMkjbUp8q5ZKFFCr6lXToVoKsWg6m1WFttOmJxeofDYfDN59wd/UaEQs/Kaz8z/ANH7ozwMBAlMAlWVmLm3NK2ANyLmCO3rguHptaBSnUa6XsgV5dLztCAePqFKaLqf41N4UAnUwflIgGSNjuIiZETgVR7GS2mb7q2HDtxZDM9n6ool6SDUDD1eZQ2mzaIDbRploBsb4Yp4UvZ4osPnt7fu2qbw9GpXq5CYHC31j4SUicVzb5lh5fJUaZRVFiBablmO14BgbYKKTGtBfp1VMZ/HNzy4XFuvVNn3EUskKNal5pKMGdYhmaZ+IkyJUWjYRjIqGa3i0zA2M9+1ijUmDLkPsrWZ4UKeSsFWooU0uTSEgqGVgJvynVJvcjDJBe5zamhE+s39uaUq0mVG5Y74/pJuU8WVmJiUdeYGTBjuhWIi5gC3XrhqnTdSEB0jh+ZTuA/jDUMOeI5i/DWRy46oyM81ahVqQKNYushB1I0rpLGBJgwdp+o6gArEnSx/atWomifD4ShHH8u5q0UVIAp+WNLAt11XB7zaeuB0SG0y5x3lUN3Q1NXgbh1OnTX8/ePWCDI3BscQ6oHOzfFBeDonuhTJ64KGknVAJCvZdsMNJmUJwSN9q7j7sP8A+o/ZsXpf3McPqFx/qFmFCqQd8MAqhCYMygIIOLFQEX8OcYFPL6GgFG00zudTGZYTJF+nScY2LoQ/MJ5Ry1/CbpEuGvVM3DadUq5eqRUuA0swAhSwUSLe/fCTcT4jcwJ0OtzbXloQEdzAwga/BQ8D4ZQXOGprfzH1QmowmnSYAFjIk3m4MbSGcM8FuW0a87GeN+sbKtcODZPc29PypfEWWPlMAmp2bUyLHMDA5rXEE/QR3wqZa4Nkak2vr3AUmq5rS5gmBA2+6S+FeH3qVD5LkNTYOqNMGDDQxsQLDpJMEjGgx5c2CArt/ksTUZ/uMekFaRRYtSLRqIHNpMyZ+E/i5Z7D9cArCxc28cN7+/l1i3sSgBvmANvhH0uqtGgoXRTRYYKDEGwkAj+Uf+7CGZ1WWM0MSTx0kd7wi2B4R330VHjtRkREoprGoIxIsFBmRe8GBYECRPqw0XJJ2y9Y079NVdt9ev3XuUepR5WZ3VUABN31STsAJ2FheTM7DBXVWkwD5tuu3Pu8oTmw0ui2p6LjxfBotWXkegQWjeWCG42BGsXMxvFhghpeYkN0PwMX97c4VcNVDxff4cva6TXy1PM0VFDzlrkgRUBIKk/EJLFVgWIN4Mkxhh1UthtiO5jhz6p7C41+Hdln27v6oj4U4clFadTy2NWoagLGZ5C+w9QDsLx3thLGvdUPhiwAlFdXNQOcTuEyeItGXpL5qK5ZgASbiReCLqdMxH5dzOKNwj6YEiZ9bbe/r6pNlVtRxvFjskPiWceBQynmVFMsrDVEQrBSQdJHIovMwfzYepAyS4xfTe/4UVKtot+v2gvhbw+1YulUik61BqJImDAYETI9DsDaL2YxFQNIjRRhcU+iCd0X8Q8NegKGliTpJqtuLMNJIHLtIn/PAfGzgh8TsiGq6s7ORCP0/DTimM1RE1dIlJsygfgi6t6De/XCuU1aeVwt9VAqhjiEW8G19VMyROokgdJP9/ri1KB5Rsg1pJzcU1rUjb64YBIKXiVb8+BGD54sqZZuss+1DiAZ6dEbiahHabL84n647Dg3dxXVNQEkU7mMMhUTPWwYhUVVad8UXFN3CaVaadU1JWQroWgaTclh8t94GMipRo0nFrBqSTflMW24psV3ObLzEDh3dHeL5uhQIzFUsttQUC7SY1sNxY/CPw6RvsKqwB+WDJ266zwnhwhEpFz2fX6flW8xmqKqzsp0j+U3BAEbe5jpGFJpGXQZ0620nlb25qwa+wlDBXZ62pKerL1AATFp9Jgm3UWE4mkSwkvENJsI7+yM5oyiD5gpuF11qedSoM+u2pwCygqqqqa2sbCTMneZES4yajA5k39CbadO41Q6rTTcPEA7Oq+yfGkZ3pquiso/iBgdPIOcIYggMbkSLEjFHtyguYL79OnWf0ULw4Mm4O/fL5rrjubq+Qq0wHJhSxMwQ2qdoNxe9rb4s6cgafnO8+64Zc5I6qLhqMQ7EOzBQWe6k7yAGEHaJIuNNiMA8U051trbbu3xUvbnblnVJvE6h++BqjMUVpfoE0KACV2ZbL09bRdio41qbiy5jvoj4SiKADBP77hd1PNL1/8AZwXcNSdSukAkCqDeYEz1E+tjWg3yzVJAvrrG30QcTTe2s14Gog/PRNfDsmcsqU2pjSFUhyRcqCzmJBJL3gWuCeuLuBc5023E6ED4rgZ37KCcdz4NZk0BqmllALalEjfYHULEn19sXZJdees8Ozc8VJbDJS/wDPNQoVnRFqKjiPw7wsbHb6x64JILoQnsQytQKVPvPxiuGZ6VM3DnaDYhYJJPv8ue9tQZTsdTwRWNLRZFaFH7xRyS3esDpYmysoJkEbsVGm49ZvgD3hrnBvZRGgi50Ws5BQigRsI2wak4Nb5tUo8ZjIWceIazZTPuEsrkPHuLx/3asAq04MjVOUiHMunHgWf81A0j1xNCpn1Nxql6rMpXHibxTTytM31P+FB1Pc9h6/vh1ozGAUA2uVjOczb1ajVHMsxkn+g9OkYZygWCHKJ8C4aXaSLYNTYShPfCNtRnElRKL8EpZYU6grWJWCT7mNPWdha+M/El4kbLgC4wFeWj5NBAzrBUufNEM0HlpwDe1jvvjNe5xqtcdbO6mRZadJuVsenTmrHF3pZig9Z0LZhqZK0YMpIsChiwtJMWkYLNJ7i4/wBvlG3MDZc0PZ5JhvFLeQrVWzWWfMqGaAysXABIYiNJjnmSVmSemLTBLh7en3XZ2kZGm3Ed+iduJ1DQUFl8wagE0gwswDJFoJMSTIkdrAfReQKZg7coGosONuOiltQOM6cePx+ilzHEqeWou9RtETFO4gkAqOW0esfrbDFN7Wsc0G97aRw5R3qhuBe8fNUfD9IPTpVY5qyl3YiYOsWE7STO0AqDOBtZkMTciSeXD6/VWrOmeA0UPEM2tLMeW9SKbjlRiQdSmVN/SZgSYWLkggAJll7HMDcWmb2Jke/urtggOtOn6RaplgaT6VZG5iCBBYkxqIn8V4G9sRUY17ZAOh+f1vA9kNryx/Ed/JLfA8jSpvUcmozVW060N1A/CFEsZiSACI62GNfAVaVOnDrE6GNu9USrVe54Ji2x0nvml/LZPMUcw9XKZd1UalXzEgsLggJAv06H9sLVqtPNDSfb8LYxVWnUw4a7LmsddPW9vqufEXF84CjZkPTCKSrI1tRIjXKwrQRHvM74vSptqamTzPD5zukcKKOU5/YX+KomnXqUKOZqGoWR2BcmP4d2MdCBoUxBtJ74rmylzGdn7pbE02kjIe+amzvF6RppQRR/HqEswWAdJWwvckwY6A4qwPhx6d9EsyoH2Oosrnh5KWYgqDpy6kRvLHkA1AQQL+txthasH02uLxr36Xj4ptjmuIAKIcBJOcpEk2FQKpA5BIEC5OqQSTA3G8TjqRIa287/ADVHVGvL2jURK0Skl56YdbLnZtkqbCFmH2lp/v8ATJYBPJAcn8PPUiOk74s8AtsLo1JxAS9l+PVKR8sSgaSoLaWI3XYSJ7YGKDR5h7qXVCdVI/DDUotWrPFVub+XaIjtFu+DUX+YkaJao6bKvw3heoi2NFjZSznJ74Pw4KNsNtEJZzpQ408LFModnl77YE8CJOikTNkfyRquadRuVaAiwDFi0jl1HltuR/W2RFEA1GOJm3Lnw+CePiEhrhEX771QtOIPWzGapMW1KhekVa5Ak6RG9wAfS2AupFwFQeo16I0tjI4SOfPVecCWtUorWzTpT8qWUIOYBZUltWzhhq1QRaTscM1iMwycPsLbpGhgmsqFzZ4R3qn/ADFb+ClEOgqErLEWuNlm+raLYDUcCPBY4Zpvp3PcplrST4hBiEG8VcJQUfNY1CwI1jVYrNgVnT+USQbYG+n4bMwMmfj7K9IlzsoRfWTQoaCZdQTJIgwsAjlO7dY2vi9em/M0Ndbf0gRtxuqUyBOYd9boCKa1csn3qmtWqSwJMEjoBPQxNpFjffFfEECNTv629UcshxA0VbM1MwtRkUuwQBkQQ0sJ8sMYLEDSSCT+EAQTeWuJdpoe+qHlAE8VcyNFyKdYoQyNzlaYUszlVZCDtTuCbX0SDJxLDBlsZdO+nwvEBJ1jVDssW15pkzLqBfmAgbbHsCL6es7mZwtXLS+HX9NOXTeZk9NGWB0Tp380j8azC1Hr0q1MatMsxiLqxX1IFwT7E7mDeA9mV83df2TQgAEaIZwnOsvCaCMonWdJbmBI21SQL6hMzINh1w1VcHOMHfvl3dADC034Dv4JO43xOnVDpSQQvSwioCQzrG6spiPbaLmp0TTIc43OvDp6beyBkbmLh0R77PeGVKbSpIVhBH0v7yBfC+JrCpZHY3KLLQ/D/hpKVY1BqvcSZid4nAmUy4jkoe8QeJTcFgEf2MPhsCAlZlYn4/C18zVcSr0QAs7OBJbbqCW374GwmANimIISl57U65rZlZkWI2AAgL/9YuQKtMMplBqMe12YheZnjtWrJ8wqo2WBHpPfB6VMNgJqnQY+mXFaD4XUtTRmEEgE40KYtKxqliYTrlaUDBwgJarJBIwqQmwZQTjPCfM5lOk9SOsXGFq1LNp6otN+VEMz4jSguXoKvmDyjqcsbNEmVBEnULywxkeGHB3lgD63+y0Abgl2qXOA5WsmarVqdNRTIZJctc7mLks0ySIMC9sHNQf44zG/dlIA8S2nd0cq8bq5+oKNNG1lSPNVhpdQAS0RN2EdLH1jC9QZvO7XhF5k89Y1RGxT0R/wjnKjCrSzhptUoMInVyoZUNcwYhxbtglXKaIqNO5Bk/14ygOBDoG/DdcZjP0c1lgB5unzBSdUZQxkiQAwIZYMdTY7ncQHmaXfe+0797queJy7K1l6YrHzGdxTIK84KsrA6dOhgACRCzAFh7Yq6k6ZjnI34jW1t/0rOqBhyzfhbrNrosaQZGolERzqdNJnUAQGJsOaCpIkm5wSqw1KJy6t7P5/KinLXZtt/p+EJ4XWCZhtZ0yoLNqj4TYQSJJUsZuRpnrdfDHNJ5jTvshHr2aI5oFWzFbMCq1Bqi03ddARgjMALwxHxmCTEG/U7FpNg6aevrbuVR5Fp7/CYaedd8vpdCtdFdUQEmI+BdjrI03b0na+L1crmyLjTsT+UBjg14aTE3+97eyEZjLtli9RwKuuSQagBIuV0Sfw2EgHlJ9I7K6pY6K7qgLddFnPiTxHXYVaZgrUbXsQaYkEKDaCAFjsAMPUKLTD/wBcEF9QgZQP0r3hTw15jAleU7WtgFWuSYRgIC1vhHCgigADl2wu1q5zky0aMAHGg2mQASlS6Skz7QPF/wB3TRSg1HOkfyi8sfkDHt6HENOdx4fNMUaGbVZXxbLaqNN9bMWeamu12AIbf4bddiuF6VU5y0849/mnS1hmdvsqWbFZ6BWoVMQZWDInTczPX3wakym2tLd0pVc80/Mu+E8GVmGoSO3TGi1t0mazg3LK03g9GAMNNCRcUy0Bi6ogvFtDaatI6qdUB1I6g3wJ7C0wUam6UN3wKEWV991Ro1KD7jFXNkEBTK8q8P106VFqiUUAIZgILbs0k2GoyTtN8ZWJpZHCBtrsI+qdo1hlJJ9FeHFqNPSKVZRVg01dl0oQDtqKhRcfm6DvhF2HrPIIME6aC3fd1oMouLMxbLdeKGZriFN8xS8hUXXaozNZ6cm8xMhubsb98Bo4eZY8mJ32dxvy1SLsflcWvacwJFuHd0Z4Rw16NSs7HzEVl8nVUMpZllQSQCQbiBff0aNfw2zExabD96ackYsDiOetu+9FWzHF30LRpKJBLgPaYYz7jXF9j85xUYio5gpkfL0EHu2io7CNFc1p7sPlspcxRzVNBXUw6qGAClii3LJp3fmFwImxtaC4YvpEskEED6+gRqlamW3H5PG1+iVPE2VfM5seYNFJ9YleaArkSOUaUaIlt/aMXYWUwSPppf5bJWviavhBjRpyvcBN/hY12Ua4phUBn4iN1UnbQ+liY0kWW9iMVjU0z2f39VUO/wDYugPEKAyubqBC9MMsKdRLDfVoXYEkG47ztOA03F0sB0J136lFq0nOAeXW4AadDsoeJ8Fq1K9Oo6KVIJdY0ywa6yTywQSAJBg2wYEmZOvyVAWizRooPEfBKS0GqUKIJRuZRF9M6gIN5lRF49zjqbjPmJ4d99UaVJ4W4ochTenmabF0hlpC7aTEhTs0XPYWviXOzVGmLHfn+VSBBG/0Wi0fEFLSGKVASJ0kCRIkSATE47/Iot8xNkM03TCTPEn2oIlR6ABplLTEzYG0bfP6YORUq0wWaH0VW+GxxzFImW4gnnA1ga+oSSzEsuqJ0iO4i/ttjjnyzp8kbxWiwMyrh4gay+UUYIp+AC57AkkAAW6dMDp4Q587d91DsZAgqccOdwEHLTHQgE/6f3fD1DA5Tmdqk6uKLrbJg4VwcKBbGg1kJRz00ZLKxgoCGSjGXoTjlCyP7M+OBlbIVT1LUCe+7J8/iH/d6YsRnbzHy/Hy6KAYumZ1Kkg7jCxCZBlSU2xEKy7qUtRWZIUhtPeOl/rhHHYd9anlYd1R10N8T8Kq1xpWqqUJ1CmyElWPxkMqmQTJueuF2U6zabWETl0/a3MH/J06VMtcLkRPLbf6KhwDws7MV8yVBhQBDafxEGJBkbTbf3UqucXhkQf33og4ktf/APkDbhrAtHVMee8Il6JTzHSprUk+afMKggNa8cskLO8A4pTcGOlwmOQ+XZU+IXtE2nbaeqhNMeflalGnKir5NQCNIMxbrMw1htIOFsGP9hY42NxM68NNEzU/+V9fojHiLMGklaqGbzGIsTyqLgdTcXk9RbaMEcZ1NybiOtpvpEe/JZuIxXgAAAG3f3SJ4f4xmmzFEB6j0zVEuxgICCGO/NqB+EyJCkbYdBZEOMH3PS+1kDCuqPGZwTDxKulMyjn7yVYuFYaWBLFQbLygCQBe8E9cAaS4eU237stAjKbhCuKVjnK9FiUpVEDAEMoEpp0mJ1QSWgid9xgpGQF0iCqh8w0BX+KJVprSBqBHWGZi2rSVLMS6iQRZhqYgATaZwEOg+b05/NQGgzCV/EfGazstQl0enT0cgIJOpmXUL9SFg4PQI/oY91n0a73Eh22p+A+KtcMyH3hfMzlcvUaIp0mIaItqAGwgm8AYIQBJbYeh9tQl62PcT5NkX4HxpTSqGq/+FNPmMtCk7iSxJ3E3OM/E0HueBsd9ua16LiWAnVZ5muHq7nMValNfMP8Ah82rUdgbctr32xrsqFrMjNt0pUDnVYj3RbhdBkqUT/DqMXgLJ1FApMbACP8ALfC9SoCC47eyNTo5CRx0TPpo1s9NLbygSIiW9e5A/bGhhCHm2iSdUltkw0OH+mNKECUVy2TjHKESo0Yxy5L3jvxL9zpBEg1XNh2A3n++oxNhcqWiSsDaoUqKykqwuCNwQbEeu2JkteCENl2LXvDvG14hR1WGZpiKq/mHR1HY/obdpiowHzN0+Xe33Cux8WKsrgEJhWKb4iFy6zVSpoPlBS3TUbf6+2IdMeXVVKtf7SanTcqUy6kfGx1MN5JUWM2i9searmoyuGPsXXnWdvoOi16ZpupyNttEBHjakjLlqDMWqND5hhIBPUzc+2ww8ykQyBH3S+cOdJVihka+WQq7lhSqK+oCdWo6tZDWBFwYkwLDmEIZGOrZjbQHWJi3dk9n8kBV/tHSoSKaHTTURN92hua0uLAE98Xouaw5DFtANb39xxWYcO+riJg5dSToSJ/FvshOWcUMslDzCzNprVGLQqqrqGjsJgdzi+Y1Huc1ttOcrRLAAEQ434TTNKzpUg1NJZgJHmcwMX5V5iYE3J7YjCV6mUPLYE6JLG1qdF4pgTb24Khwfga0K1G5DI+hmJPRYNyYjqIMbRG2LOrPc8h28+izfFqXg+yYOCZCi1V6tKrrBbS4cSC2i5ndgLtDE8zHvYLnkNGew433PfBbFJhIGfVDONcfOhaTnS9NgaTAT5jK2knUBfm1MTAAtY3OChhkOFom9vnvOyYxVBhpkNNnbfHT8qhwzhlapUDorDzZU1DElRcgRvcG+0W745zwGx8BZYWEwTnS2o0gDuFR4LRTnNViNJlYUEyNS3uLXPf98dVdfKtpgtAVriPC1rlTBBpq0xZRJ1TJsTzdhED5DZXdTblG6KKTS6XaKTwnnKBqopVnqMdGuBAA2gC8fLGxhzSENI1WFiMQfEyhPtLglIVPNFMB9tQntG22H2UKbDLRCCTJk6onRy2CqFbp0cdK5Q8U4gmXpl23/CO5xBIAk6KQCTAWYNpzdZmzCA6vxBiCOoE7R8uuEHYhxcnxQa1tlnnH8roqH+Uz8sauIYQ7osXBVc7BzUGS4nUy1anXotpdfoe4I6g9sCzlpDk2xoIIWy8B4nTz9HzqQ01B/iUuqnuO6nocc9gjM3Q9wua+DlKtCnGBQiyp0GIXL6vl1qLpdQw9Rjixrv7BUIuosjwLLo0+UO9hv2/WMBq0TlIpxPfsi03gEZks8cztQ5p1qs6rVphAttJgjSLRNyQZgx7HGW6g9rYd/bW26ebiabnZWoj4lzOmhTLPqrBuVCSdoBkQZJjc4zaIL3k8Zm+g9UfEvdTpks2Hv2ElcY4ZVvWo0XKNEpLHV2LWEnfpaPro0qo/+bjHNCpV3uaKgHHVMvgzhdWjW0jUJBBpgnrEOBaYYsk+18UfiQ9uT48/0qYuiatIkNuD8N4+yv8AG8rTqlqDlQxIfS4b4AJZrHZQCxm1ha4wGiHCHNBQMNhXsOd4gXHOftdVvED5VMkHpVPKWo3NTMBxN1i06wJ7iDv3MA5zxlvqtBpy/wBgvuF1MtRrnRWGmoIpayCFZviGkn+GT2tJ+WFa3jmnMaTttx6gdUZjmf1PzVzx5xeESnQpVKeiomp6VQhbwSTpgm9p33+bFF9NwkCCByv68UEseDczJQHhdKatWiyTqSNIH5hygjYc3MDuJmcc3MYcwfVCq5cpa4orwLwlVd1esx0kfDPQ7g9D642aeFaBcBIOxDo1TxleD0kYMtJAwEBgomNonDLabAZAulTcyidOji8rlMqYhcqnGOKUstSarVYBQPr7Ys1srlhvifxI+dreYWZAp/hqDGn1t1P+nuOo6bDRHY2EObO1IvVc/OP2wINAVyVJ4ppTSpuAf8PQ0/mWzT8xjXxbSW5uSwMA8eK5vOfQpZZNVP2wgRLFqg5XwmDwFnnpVC1NirqZBHbqCOoOG8EA4FpSf8g40yHt1WycK4jTzYiBTr9U6N6qf6bj9cDr4Y07jRXwuMbVsbFS1MuVMEYWTwK8C45QpkXHKCoc5lKJGusqEJfUw2wOq1kZn7bqAcl0oeIMylTNs+kU6TKVLkEgE7sQASNwL+uMTwngEbTbZNChUx5b4YsPc8bJzq0Vy+QpIVVn0AlvzNEze+/fCuPriWtA8xR6Q85k20SDwfNZmpnMvUFQVH0mkAeUIbhlaZDGAYPWQd8OOYymC2LkD7LfGFZ4HjONhOnwKteJnKVanI1PUsPVMc8sD5ahYhRBI7xBnC9FxeAATPDf8eiz6xMSYgILk8rWzR0ugakhmmpgEdOYjuO23zJxo/4roAaY4pH/ACQCc3omvh/h5aSoBlqbtVkVjp+Gw5gxM77R3wu/B4gugXG0z9PspbiaYE/JXOLeGUDo9NqgpghXpnaJA1CbSCQJ327Yilh2tf4Rm/Hu4KtUrktzCO/qmjJcIRCWVQGa5bqfc7nG2ym1ggBZj3F1yr60gMXQ12q45cuwuOXIdxvjdPLLLczxyoNzir3tptzPMBXYwvMBZL4zrVc2adVn5YkIDZflFz0nGU7+Rc4mLDYfdPMwzW9UrjJsC0XAiTtfF24y3mUGjwVYODIFyNx1Hyw41wcJQS0hMfiSgPLqDs4b5Oo/qDj0GJbLD1Xk8C8io3mI9j+UqDL6aCN+acZ4YRSBW0ak1y3gvvClQiuB3H7YnAn/AGQo/kmg0ZWgZpSIixF5G47QcbDgvM0nXRjhfjeIp5sagLCqBzD/AKh+L3F/fGbWwzSZbb5Lew2LdEPvzTTQ0VFD0XWoh6qZ/s4Sc0tMFaTXg6L0DFVZd6QwIIBB6HEEAiCoVWvwOi+nl0lQQCpIsRBB7/PA3UWOEEJmhi6tGQwxK4z3BGq1EZqzlVjksAQPYYSd/GUi4vvPPZBZULSgVf7P2hGo1zTqr8TXuZkEdQRg7sKCAtXC/wAq6iCwiWlGsr4ZrsgTM1/Mj0An3O5xWngaTH54ulq+Mz2YICK8O4GlIQBhwABIkyiaUQMSuUk4iBMrl4WxKovtWOXLmtXVAWdgoHU4kAnRckrjvj5YK5Xmvp80/CD0jv8AthWvi2UrC5+CYp0C65sEh0c/Uaoz1G1VLEk/OYPTcW+WMjEVHVDmcnqbA0QExZemHUArGmZBG89juLzbGe5wCKFXz3DBBQDTeQR7dfbbFw+DCghLPE+FwSYBkzy/3bDdOvG6C5sohxl9RqU+poK3/ib/AL495VvmbyC8NhxAY/g6PcfhAcwoORot1DMp+RP9MKvH+hpWiwkYx44gH4Ib4XQ/eUj1wDBD/aE3/IOH+O6Vo+YIKlpEbR2IkRjZkaheXDHAxCUc4+pjG2EXmTZbNJuVt13w3PVcu2ujUZG9DY+42I98Ui10UPINk38M+0gWXNUv++n/AFU/0Pywu6k3a3ffFOMqndNvDON5XMf4NdGP5SYb/wATfAnUnC6MHgoqKRHTA1K7E45TKlRscplTeZjlErzzsTC6V552OhRK+LY6FyGcT4/l8uJrVkX0Jv8AIdcXDDEqJSjnvtPRiy5WmW0iS78qj5bn6DAatZlMTqUVlJziljPcQzGaBas5KxsLKCdrenrOMfEY2o+0wOAT1Oi1umqqpkyuhYnmkD+Yf67YSL5ko8Ipk+Hnmk/i6dJvcfQ/LAX1RqpATLkqcIzKAYG20mbx6DAARJKsdpUasGZ7W/CSOgiY9OuLT5lxFkI4zQC6RM8pYx6kR8pwRom6oUq/7RFTiELddDJ+k/0x9BbVz4kgcCF43/HNPAy7WQfiostT1Uq9C8qfMUfo8fpirRNNzOBlEqOy1KdbYiD9FL4QyH8TUwj3xfB04MoX8pXlmUJh4zMtHxdSWMHrHYX6xOG3zss7DHQO/KAoQDA3gGPT+XvJEXvhcRMLQIJE7d6/hR5mL2iOsf098Ucr05Qmob4WJTgFlzl0kziGiTKl7oEJt4B4rfLqwepVMLyDVIkTCkepi+KVGOJkHv1RKNUCzgmrhPijNtQSq5pnVEaliwnzWNxCqAfckYVNRwMED4psNaRIKJUPFVYhSaSXAO5EBjFObGCbmOgE4jxRpHx/Ct4fP4KDi/jg0KZd6SyPw6ryZ0qYG9r9sWFRs6KDSjdKtT7Wqp+HLIPeof8A4YJ4jOBVPDPFUMx9peddgtMU0kwOUk/v/TFXVmgSB7n9KRT5qvxTiGcqKdecqExcLCr3jlg4D/luJtbv3RfBaBKUlfVzG5PU7/XHFxOq4W0RnhkqixEOx1SOggL+urCWLdaEeiN085Xh50iNtMC3W9j64waj5TbQiWW4duuk+h9TAO2+AmoVaApvIOoqpFo6dYGr9D1xM2UxxRI5cCleAIIYHrPrv8/bFKY3XHVQU8rKmDAI5ZEaSI+cE98EbfRQVSzqKfi6DTcdN/fp+uLg5QoWW5tqdDM0wghUa/c7gk/XH0AllKs0DReTpipXw7i7UhQ53ONTr+Yhgg2P9D6Yq+qWVMzUSlRD6OR6P8M8UUSZK6X2joThyniqbtLHgs2v/GVW6GWq1mcwX+f6f64K4ygU6eRU6mWLKQx6dOnt2wJzC4XTDauVwIQ3MVCNzYkQff8AN88Be47ptjQdNR3ZVKy3wFwRmlTpS0gYuGwhF+YrlhJxBEqwsEZ4dXLU9BGvywHCE2dVMuvpa8e+AVgBBPRGouJkDqj/AAfilOsU5zZpcMYln5nPaFVdA98K1KThcaJ2lWaTBSV414qK1bSghEm3diTJHp/mcDDcqMXZkA14lQrOQr6Kivp1QdsVcMwhSDBlEc7xJqoCKukHtu3pigYG3VpJXGeyBouqP8RQNHb0x1OoHzChzYRDg5GpBN4AG35nPX5YRxwMSmKGi1HI0wyiIK7H37CNjN8YhlMWRGjSG97XPywO+vr7Ky4zwCL5nUCf0J0+/acQ1jiRC6VBkOKpWkQVkjeLTGkn1IIwcsAKpdW66aVKxzwQPWZ6db4qGgG+qtM9EJzVAtDKxDKIIIMGY+mLB1lOiw3itXVUJ9cezxDpesPDNhkKGrVJscULyURrALhd5PKNUMKMWp0y82ValVtMSU5cLyjIkO0jp3Hz7Y2aLHNbDjKwMTWbUdLBCuATtt+/+mCQl54qlm6AjAHskJmnUKGiiV9gbz69vXAMpCbzh11LUbVbYjp7fvix8yoG5br2nTxwChzlay4IIZSQe4+mL5ARBQ85abKvWpgCAMVLQ3RWa4uN0Nz2X8wpB5og+34Zwm+jmdZaDK+Rt0PzmSZLkyO4wCrSczVMUcQ2pZQ03wBHTt4T4aF/jVBJnlX+pwlXqZvKExSZFyuPGlNvvFPX0QmPnt9IxfDDylVq6hRcdzCO1NqIggBSIiCdv2OFaNGoxhFVMOexzhlWm8CINOnpIBIDNF+Yi4/vtjJe2HW0VweKJKwUzYTufqL/AFwNgLXXCkmQgfiRi5o07m4LdLXie5gnBWuAF10K3wfhYRSzQb/5AXwN5m/BSEazNHlBtrUhhHU7R62xAki+uqiUJz2eFNdYM3iO99z2IINvbBmj/o7LhrCwmnuTYmR9LzB7+k/tj19USVibIynChX0mSqgkkdySCYP6T2UYmjhajjMLPfizQkanv9+qLU/LpCBA+WHw009B8ev2Hus93i1jJQrPcVJkDbp/XEvruhPUcK0RKpVPELhp1arREb7bxufXfCrK4pHye3eibOCa8XCI5Piq1TaA1uU2vfa9xthynXFTT2SVXCmkL6cfb8q1UoXE7Hf9Y6+2Llp3QQ8CQFWzCgsYG22KuiUSmSBddohEWkT84MT7xiQCIUOc0zt91ZouI07EG84K0iIQHNMyq2dW+BVBdGpaKLKUNziGN3V6r9lFmRMg3GKPAOqvTMXCAZ7LlD6dP8sZlWnkPJa1GrnHNOXBuIhqY1NAi/8AfpjIq0zNloscIQ7j/F/vNZSPhp2Dfmnf5Yaw9ItF9Sg1XgmyjUg22kb9ux+WGHiWwhtMGU8+D+J3ZNoABHyufUdcecr0jTMhPNdITdUpqBJN7EA9TYAbbXvhTLOqsoq+bp6Q9yytEdwDBjuP1wUtkgkqAuqGaLagq6I1AyYgfhv3g4qW3gXXTxVNs9LNocsygGD1AVpBHQjvgrWkaqDdDKNfzajHmAbaBfYWHe874pUdJhqu0QEiZXJoY5Rvj6Iym3gvG1Kz73V3iFQqoC2Hpg1Q5RAS9BocSSl3O1TG/wDc4Re4rVpNCCVKhO5wg5xOq0GtA0XGKqykXFwqlNHAKpdDqMxtONXDOL2eZY2NYGP8tkXSkJFsMACUg55hSEWxbZU3UNdBC23EH2xUgWRGOIJVBjePQH5kvP7DAJ7901t3yVukOQYMP6pc/wB1QqC+FymmmyG8UHIffCuJHlTmGPnCGUllgOmM4my1An/hPB6JoyaYJjeT/nhB1Z86pptNvBLOd5KpVbL23/fDtJxc2Sl3gB0BGOGfEp6gwD6YTxoCJSK0TglZnohmMsCIJ9ZnGRAJvxR1Fws6jzXhZHodINsQRspKoZFjUVWcktMzPUDe2Ie9wNlMIhmMsoqQBAEH62OK53TquiyvUBpgra5/acWpMaXGyo8mF//Z",
    description:
      "A perfect mixture of puffed rice, chutneys, sev, onions, and spices — a Mumbai street food classic.",
    details: [
      { label: "Best Place", value: "Juhu Beach" },
      { label: "Price", value: "₹40 – ₹80" },
      { label: "Taste", value: "Tangy & Spicy" },
    ],
  },
  Gola: {
    img: "https://static.toiimg.com/thumb/54692770.cms?imgsize=44908&width=800&height=800",
    description:
      "Crushed ice soaked in flavored syrups — childhood nostalgia and summer favourite.",
    details: [
      { label: "Best Place", value: "Juhu Beach" },
      { label: "Price", value: "₹20 – ₹60" },
      { label: "Best Season", value: "Summer" },
    ],
  },
  "Pav Bhaji": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76z-bgTipPf-E_XzcE3E4h_4eTc8zk1TSSg&s",
    description:
      "Soft buttery pav served with spicy mashed bhaji — slow-cooked on a giant tawa and loved across Mumbai.",
    details: [
      { label: "Best Place", value: "Juhu Beach" },
      { label: "Price", value: "₹80 – ₹200" },
      { label: "Speciality", value: "Extra Butter" },
    ],
  },

};

export default function Mumbai() {
  const [selectedFood, setSelectedFood] = useState(null);

  const openModal = (name) => setSelectedFood(name);
  const closeModal = () => setSelectedFood(null);

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Mumbai Street Food Explorer</h1>
          <p>Discover the authentic flavors of Mumbai's bustling streets</p>
        </div>
      </div>

      {/* Modal */}
      {selectedFood && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="modal-header"
              style={{ backgroundImage: `url(${foodInfo[selectedFood].img})` }}
            >
              <div className="modal-overlay"></div>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2 className="modal-title">{selectedFood}</h2>
            </div>
            <div className="modal-body">
              <p className="food-description">{foodInfo[selectedFood].description}</p>

              <div className="food-details">
                {foodInfo[selectedFood].details.map((d, i) => (
                  <div className="detail-card" key={i}>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-value">{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="container">
        <h2 className="section-title">Famous Street Food Destinations</h2>

        <div className="food-places" id="foodPlaces">
          {/* Bandra */}
          <Place
            name="Bandra"
            image="https://staybloom.com/content/1667989923991-Bandra-Worli%20Sea%20Link%20Desktop.jpg"
            foods={["Pani Puri", "Frankie Rolls", "Brun Maska with Chai"]}
            openModal={openModal}
          />

          {/* CST */}
          <Place
            name="CST"
            image="https://static.toiimg.com/photo/104951887.cms"
            foods={["Bombay Sandwich", "Falooda", "Vada Pav"]}
            openModal={openModal}
          />

          {/* Mohammed Ali Road */}
          <Place
            name="Mohammed Ali Road"
            image="https://live.staticflickr.com/3423/3932305853_982ac5f263_b.jpg"
            foods={["Seekh Kebab", "Malpua with Rabdi", "nihari"]}
            openModal={openModal}
          />

          {/* Juhu beach ONLY displays images NO modal */}
          <Place
            name="Juhu Beach"
            image="https://yatrirailways.com/bl-content/uploads/pages/4c7c6ba1f469c2edae5c7a267354101e/Juhu-Beach.png"
            foods={["Bhel Puri", "Gola", "Pav Bhaji"]}
            openModal={openModal}
            disableModal
          />
        </div>
      </div>
    </>
  );
}

function Place({ name, image, foods, openModal, disableModal }) {
  return (
    <div className="place-card">
      <div className="place-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="place-overlay">
          <h3 className="place-name">{name}</h3>
        </div>
      </div>
      <div className="place-content">
        <div className="famous-foods">
          {foods.map((food, idx) => (
            <div
              key={idx}
              className="food-item"
              onClick={() => !disableModal && openModal(food)}
            >
              <img
                src={foodInfo[food]?.img}
                alt={food}
                className="food-image"
              />
              <div className="food-name">{food}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export const POSE_CONNECTIONS:number[][]=[
    [8, 6], [6, 5], [5, 4], [4, 0], [0, 1],
    [1, 2], [2, 3], [3, 7], [10, 9],
    [20, 18], [18, 16], [16, 20], [16, 22],
    [16, 14], [14, 12], [12, 11], [11, 13],
    [13, 15], [15, 21], [15, 17], [17, 19],
    [19, 15], [12, 24], [11, 13], [24, 26],
    [23, 25], [26, 28], [25, 27], [28, 30],
    [28, 32], [30, 32], [27, 31], [27, 29],
    [29, 31], [11, 23], [23, 25], [24, 23]
];
export const HAND_CONNECTIONS:number[][]=[
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [0, 9], [9, 10], [10, 11], [11, 12],
    [0, 13], [13, 14], [14, 15], [15, 16],
    [0, 17], [17, 18], [18, 19], [19, 20],
];
export const BOUNDING_BOX_CONNECTIONS:number[][]=[
    [0,1],[1,2],[2,3],[3,0]
];
export const FACE_MESH_CONNECTIONS:number[][]=[[127, 34], [139, 34], [127, 139], [11, 0], [37, 0], [11, 37], [232, 231], [120, 231], [232, 120], [72, 37], [39, 37], [72, 39], [128, 121], [47, 121], [128, 47], [232, 121], [128, 121], [232, 128], [104, 69], [67, 69], [104, 67], [175, 171], [148, 171], [175, 148], [157, 154], [155, 154], [157, 155], [118, 50], [101, 50], [118, 101], [73, 39], [40, 39], [73, 40], [9, 151], [108, 151], [9, 108], [48, 115], [131, 115], [48, 131], [194, 204], [211, 204], [194, 211], [74, 40], [185, 40], [74, 185], [80, 42], [183, 42], [80, 183], [40, 92], [186, 92], [40, 186], [230, 229], [118, 229], [230, 118], [202, 212], [214, 212], [202, 214], [83, 18], [17, 18], [83, 17], [76, 61], [146, 61], [76, 146], [160, 29], [30, 29], [160, 30], [56, 157], [173, 157], [56, 173], [106, 204], [194, 204], [106, 194], [135, 214], [192, 214], [135, 192], [203, 165], [98, 165], [203, 98], [21, 71], [68, 71], [21, 68], [51, 45], [4, 45], [51, 4], [144, 24], [23, 24], [144, 23], [77, 146], [91, 146], [77, 91], [205, 50], [187, 50], [205, 187], [201, 200], [18, 200], [201, 18], [91, 106], [182, 106], [91, 182], [90, 91], [181, 91], [90, 181], [85, 84], [17, 84], [85, 17], [206, 203], [36, 203], [206, 36], [148, 171], [140, 171], [148, 140], [92, 40], [39, 40], [92, 39], [193, 189], [244, 189], [193, 244], [159, 158], [28, 158], [159, 28], [247, 246], [161, 246], [247, 161], [236, 3], [196, 3], [236, 196], [54, 68], [104, 68], [54, 104], [193, 168], [8, 168], [193, 8], [117, 228], [31, 228], [117, 31], [189, 193], [55, 193], [189, 55], [98, 97], [99, 97], [98, 99], [126, 47], [100, 47], [126, 100], [166, 79], [218, 79], [166, 218], [155, 154], [26, 154], [155, 26], [209, 49], [131, 49], [209, 131], [135, 136], [150, 136], [135, 150], [47, 126], [217, 126], [47, 217], [223, 52], [53, 52], [223, 53], [45, 51], [134, 51], [45, 134], [211, 170], [140, 170], [211, 140], [67, 69], [108, 69], [67, 108], [43, 106], [91, 106], [43, 91], [230, 119], [120, 119], [230, 120], [226, 130], [247, 130], [226, 247], [63, 53], [52, 53], [63, 52], [238, 20], [242, 20], [238, 242], [46, 70], [156, 70], [46, 156], [78, 62], [96, 62], [78, 96], [46, 53], [63, 53], [46, 63], [143, 34], [227, 34], [143, 227], [173, 155], [133, 155], [173, 133], [123, 117], [111, 117], [123, 111], [44, 125], [19, 125], [44, 19], [236, 134], [51, 134], [236, 51], [216, 206], [205, 206], [216, 205], [154, 153], [22, 153], [154, 22], [39, 37], [167, 37], [39, 167], [200, 201], [208, 201], [200, 208], [36, 142], [100, 142], [36, 100], [57, 212], [202, 212], [57, 202], [20, 60], [99, 60], [20, 99], [28, 158], [157, 158], [28, 157], [35, 226], [113, 226], [35, 113], [160, 159], [27, 159], [160, 27], [204, 202], [210, 202], [204, 210], [113, 225], [46, 225], [113, 46], [43, 202], [204, 202], [43, 204], [62, 76], [77, 76], [62, 77], [137, 123], [116, 123], [137, 116], [41, 38], [72, 38], [41, 72], [203, 129], [142, 129], [203, 142], [64, 98], [240, 98], [64, 240], [49, 102], [64, 102], [49, 64], [41, 73], [74, 73], [41, 74], [212, 216], [207, 216], [212, 207], [42, 74], [184, 74], [42, 184], [169, 170], [211, 170], [169, 211], [170, 149], [176, 149], [170, 176], [105, 66], [69, 66], [105, 69], [122, 6], [168, 6], [122, 168], [123, 147], [187, 147], [123, 187], [96, 77], [90, 77], [96, 90], [65, 55], [107, 55], [65, 107], [89, 90], [180, 90], [89, 180], [101, 100], [120, 100], [101, 120], [63, 105], [104, 105], [63, 104], [93, 137], [227, 137], [93, 227], [15, 86], [85, 86], [15, 85], [129, 102], [49, 102], [129, 49], [14, 87], [86, 87], [14, 86], [55, 8], [9, 8], [55, 9], [100, 47], [121, 47], [100, 121], [145, 23], [22, 23], [145, 22], [88, 89], [179, 89], [88, 179], [6, 122], [196, 122], [6, 196], [88, 95], [96, 95], [88, 96], [138, 172], [136, 172], [138, 136], [215, 58], [172, 58], [215, 172], [115, 48], [219, 48], [115, 219], [42, 80], [81, 80], [42, 81], [195, 3], [51, 3], [195, 51], [43, 146], [61, 146], [43, 61], [171, 175], [199, 175], [171, 199], [81, 82], [38, 82], [81, 38], [53, 46], [225, 46], [53, 225], [144, 163], [110, 163], [144, 110], [246, 33], [7, 33], [246, 7], [52, 65], [66, 65], [52, 66], [229, 228], [117, 228], [229, 117], [34, 127], [234, 127], [34, 234], [107, 108], [69, 108], [107, 69], [109, 108], [151, 108], [109, 151], [48, 64], [235, 64], [48, 235], [62, 78], [191, 78], [62, 191], [129, 209], [126, 209], [129, 126], [111, 35], [143, 35], [111, 143], [163, 161], [246, 161], [163, 246], [117, 123], [50, 123], [117, 50], [222, 65], [52, 65], [222, 52], [19, 125], [141, 125], [19, 141], [221, 55], [65, 55], [221, 65], [3, 195], [197, 195], [3, 197], [25, 7], [33, 7], [25, 33], [220, 237], [44, 237], [220, 44], [70, 71], [139, 71], [70, 139], [122, 193], [245, 193], [122, 245], [247, 130], [33, 130], [247, 33], [71, 21], [162, 21], [71, 162], [153, 158], [159, 158], [153, 159], [170, 169], [150, 169], [170, 150], [188, 174], [196, 174], [188, 196], [216, 186], [92, 186], [216, 92], [144, 160], [161, 160], [144, 161], [2, 97], [167, 97], [2, 167], [141, 125], [241, 125], [141, 241], [164, 167], [37, 167], [164, 37], [72, 38], [12, 38], [72, 12], [145, 159], [160, 159], [145, 160], [38, 82], [13, 82], [38, 13], [63, 68], [71, 68], [63, 71], [226, 35], [111, 35], [226, 111], [158, 153], [154, 153], [158, 154], [101, 50], [205, 50], [101, 205], [206, 92], [165, 92], [206, 165], [209, 198], [217, 198], [209, 217], [165, 167], [97, 167], [165, 97], [220, 115], [218, 115], [220, 218], [133, 112], [243, 112], [133, 243], [239, 238], [241, 238], [239, 241], [214, 135], [169, 135], [214, 169], [190, 173], [133, 173], [190, 133], [171, 208], [32, 208], [171, 32], [125, 44], [237, 44], [125, 237], [86, 87], [178, 87], [86, 178], [85, 86], [179, 86], [85, 179], [84, 85], [180, 85], [84, 180], [83, 84], [181, 84], [83, 181], [201, 83], [182, 83], [201, 182], [137, 93], [132, 93], [137, 132], [76, 62], [183, 62], [76, 183], [61, 76], [184, 76], [61, 184], [57, 61], [185, 61], [57, 185], [212, 57], [186, 57], [212, 186], [214, 207], [187, 207], [214, 187], [34, 143], [156, 143], [34, 156], [79, 239], [237, 239], [79, 237], [123, 137], [177, 137], [123, 177], [44, 1], [4, 1], [44, 4], [201, 194], [32, 194], [201, 32], [64, 102], [129, 102], [64, 129], [213, 215], [138, 215], [213, 138], [59, 166], [219, 166], [59, 219], [242, 99], [97, 99], [242, 97], [2, 94], [141, 94], [2, 141], [75, 59], [235, 59], [75, 235], [24, 110], [228, 110], [24, 228], [25, 130], [226, 130], [25, 226], [23, 24], [229, 24], [23, 229], [22, 23], [230, 23], [22, 230], [26, 22], [231, 22], [26, 231], [112, 26], [232, 26], [112, 232], [189, 190], [243, 190], [189, 243], [221, 56], [190, 56], [221, 190], [28, 56], [221, 56], [28, 221], [27, 28], [222, 28], [27, 222], [29, 27], [223, 27], [29, 223], [30, 29], [224, 29], [30, 224], [247, 30], [225, 30], [247, 225], [238, 79], [20, 79], [238, 20], [166, 59], [75, 59], [166, 75], [60, 75], [240, 75], [60, 240], [147, 177], [215, 177], [147, 215], [20, 79], [166, 79], [20, 166], [187, 147], [213, 147], [187, 213], [112, 233], [244, 233], [112, 244], [233, 128], [245, 128], [233, 245], [128, 114], [188, 114], [128, 188], [114, 217], [174, 217], [114, 174], [131, 115], [220, 115], [131, 220], [217, 198], [236, 198], [217, 236], [198, 131], [134, 131], [198, 134], [177, 132], [58, 132], [177, 58], [143, 35], [124, 35], [143, 124], [110, 163], [7, 163], [110, 7], [228, 110], [25, 110], [228, 25], [356, 389], [368, 389], [356, 368], [11, 302], [267, 302], [11, 267], [452, 350], [349, 350], [452, 349], [302, 303], [269, 303], [302, 269], [357, 343], [277, 343], [357, 277], [452, 453], [357, 453], [452, 357], [333, 332], [297, 332], [333, 297], [175, 152], [377, 152], [175, 377], [384, 398], [382, 398], [384, 382], [347, 348], [330, 348], [347, 330], [303, 304], [270, 304], [303, 270], [9, 336], [337, 336], [9, 337], [278, 279], [360, 279], [278, 360], [418, 262], [431, 262], [418, 431], [304, 408], [409, 408], [304, 409], [310, 415], [407, 415], [310, 407], [270, 409], [410, 409], [270, 410], [450, 348], [347, 348], [450, 347], [422, 430], [434, 430], [422, 434], [313, 314], [17, 314], [313, 17], [306, 307], [375, 307], [306, 375], [387, 388], [260, 388], [387, 260], [286, 414], [398, 414], [286, 398], [335, 406], [418, 406], [335, 418], [364, 367], [416, 367], [364, 416], [423, 358], [327, 358], [423, 327], [251, 284], [298, 284], [251, 298], [281, 5], [4, 5], [281, 4], [373, 374], [253, 374], [373, 253], [307, 320], [321, 320], [307, 321], [425, 427], [411, 427], [425, 411], [421, 313], [18, 313], [421, 18], [321, 405], [406, 405], [321, 406], [320, 404], [405, 404], [320, 405], [315, 16], [17, 16], [315, 17], [426, 425], [266, 425], [426, 266], [377, 400], [369, 400], [377, 369], [322, 391], [269, 391], [322, 269], [417, 465], [464, 465], [417, 464], [386, 257], [258, 257], [386, 258], [466, 260], [388, 260], [466, 388], [456, 399], [419, 399], [456, 419], [284, 332], [333, 332], [284, 333], [417, 285], [8, 285], [417, 8], [346, 340], [261, 340], [346, 261], [413, 441], [285, 441], [413, 285], [327, 460], [328, 460], [327, 328], [355, 371], [329, 371], [355, 329], [392, 439], [438, 439], [392, 438], [382, 341], [256, 341], [382, 256], [429, 420], [360, 420], [429, 360], [364, 394], [379, 394], [364, 379], [277, 343], [437, 343], [277, 437], [443, 444], [283, 444], [443, 283], [275, 440], [363, 440], [275, 363], [431, 262], [369, 262], [431, 369], [297, 338], [337, 338], [297, 337], [273, 375], [321, 375], [273, 321], [450, 451], [349, 451], [450, 349], [446, 342], [467, 342], [446, 467], [293, 334], [282, 334], [293, 282], [458, 461], [462, 461], [458, 462], [276, 353], [383, 353], [276, 383], [308, 324], [325, 324], [308, 325], [276, 300], [293, 300], [276, 293], [372, 345], [447, 345], [372, 447], [382, 398], [362, 398], [382, 362], [352, 345], [340, 345], [352, 340], [274, 1], [19, 1], [274, 19], [456, 248], [281, 248], [456, 281], [436, 427], [425, 427], [436, 425], [381, 256], [252, 256], [381, 252], [269, 391], [393, 391], [269, 393], [200, 199], [428, 199], [200, 428], [266, 330], [329, 330], [266, 329], [287, 273], [422, 273], [287, 422], [250, 462], [328, 462], [250, 328], [258, 286], [384, 286], [258, 384], [265, 353], [342, 353], [265, 342], [387, 259], [257, 259], [387, 257], [424, 431], [430, 431], [424, 430], [342, 353], [276, 353], [342, 276], [273, 335], [424, 335], [273, 424], [292, 325], [307, 325], [292, 307], [366, 447], [345, 447], [366, 345], [271, 303], [302, 303], [271, 302], [423, 266], [371, 266], [423, 371], [294, 455], [460, 455], [294, 460], [279, 278], [294, 278], [279, 294], [271, 272], [304, 272], [271, 304], [432, 434], [427, 434], [432, 427], [272, 407], [408, 407], [272, 408], [394, 430], [431, 430], [394, 431], [395, 369], [400, 369], [395, 400], [334, 333], [299, 333], [334, 299], [351, 417], [168, 417], [351, 168], [352, 280], [411, 280], [352, 411], [325, 319], [320, 319], [325, 320], [295, 296], [336, 296], [295, 336], [319, 403], [404, 403], [319, 404], [330, 348], [349, 348], [330, 349], [293, 298], [333, 298], [293, 333], [323, 454], [447, 454], [323, 447], [15, 16], [315, 16], [15, 315], [358, 429], [279, 429], [358, 279], [14, 15], [316, 15], [14, 316], [285, 336], [9, 336], [285, 9], [329, 349], [350, 349], [329, 350], [374, 380], [252, 380], [374, 252], [318, 402], [403, 402], [318, 403], [6, 197], [419, 197], [6, 419], [318, 319], [325, 319], [318, 325], [367, 364], [365, 364], [367, 365], [435, 367], [397, 367], [435, 397], [344, 438], [439, 438], [344, 439], [272, 271], [311, 271], [272, 311], [195, 5], [281, 5], [195, 281], [273, 287], [291, 287], [273, 291], [396, 428], [199, 428], [396, 199], [311, 271], [268, 271], [311, 268], [283, 444], [445, 444], [283, 445], [373, 254], [339, 254], [373, 339], [263, 466], [249, 466], [263, 249], [282, 334], [296, 334], [282, 296], [449, 347], [346, 347], [449, 346], [264, 447], [454, 447], [264, 454], [336, 296], [299, 296], [336, 299], [338, 10], [151, 10], [338, 151], [278, 439], [455, 439], [278, 455], [292, 407], [415, 407], [292, 415], [358, 371], [355, 371], [358, 355], [340, 345], [372, 345], [340, 372], [390, 249], [466, 249], [390, 466], [346, 347], [280, 347], [346, 280], [442, 443], [282, 443], [442, 282], [19, 94], [370, 94], [19, 370], [441, 442], [295, 442], [441, 295], [248, 419], [197, 419], [248, 197], [263, 255], [359, 255], [263, 359], [440, 275], [274, 275], [440, 274], [300, 383], [368, 383], [300, 368], [351, 412], [465, 412], [351, 465], [263, 467], [466, 467], [263, 466], [301, 368], [389, 368], [301, 389], [380, 374], [386, 374], [380, 386], [395, 378], [379, 378], [395, 379], [412, 351], [419, 351], [412, 419], [436, 426], [322, 426], [436, 322], [373, 390], [388, 390], [373, 388], [2, 164], [393, 164], [2, 393], [370, 462], [461, 462], [370, 461], [164, 0], [267, 0], [164, 267], [302, 11], [12, 11], [302, 12], [374, 373], [387, 373], [374, 387], [268, 12], [13, 12], [268, 13], [293, 300], [301, 300], [293, 301], [446, 261], [340, 261], [446, 340], [385, 384], [381, 384], [385, 381], [330, 266], [425, 266], [330, 425], [426, 423], [391, 423], [426, 391], [429, 355], [437, 355], [429, 437], [391, 327], [326, 327], [391, 326], [440, 457], [438, 457], [440, 438], [341, 382], [362, 382], [341, 362], [459, 457], [461, 457], [459, 461], [434, 430], [394, 430], [434, 394], [414, 463], [362, 463], [414, 362], [396, 369], [262, 369], [396, 262], [354, 461], [457, 461], [354, 457], [316, 403], [402, 403], [316, 402], [315, 404], [403, 404], [315, 403], [314, 405], [404, 405], [314, 404], [313, 406], [405, 406], [313, 405], [421, 418], [406, 418], [421, 406], [366, 401], [361, 401], [366, 361], [306, 408], [407, 408], [306, 407], [291, 409], [408, 409], [291, 408], [287, 410], [409, 410], [287, 409], [432, 436], [410, 436], [432, 410], [434, 416], [411, 416], [434, 411], [264, 368], [383, 368], [264, 383], [309, 438], [457, 438], [309, 457], [352, 376], [401, 376], [352, 401], [274, 275], [4, 275], [274, 4], [421, 428], [262, 428], [421, 262], [294, 327], [358, 327], [294, 358], [433, 416], [367, 416], [433, 367], [289, 455], [439, 455], [289, 439], [462, 370], [326, 370], [462, 326], [2, 326], [370, 326], [2, 370], [305, 460], [455, 460], [305, 455], [254, 449], [448, 449], [254, 448], [255, 261], [446, 261], [255, 446], [253, 450], [449, 450], [253, 449], [252, 451], [450, 451], [252, 450], [256, 452], [451, 452], [256, 451], [341, 453], [452, 453], [341, 452], [413, 464], [463, 464], [413, 463], [441, 413], [414, 413], [441, 414], [258, 442], [441, 442], [258, 441], [257, 443], [442, 443], [257, 442], [259, 444], [443, 444], [259, 443], [260, 445], [444, 445], [260, 444], [467, 342], [445, 342], [467, 445], [459, 458], [250, 458], [459, 250], [289, 392], [290, 392], [289, 290], [290, 328], [460, 328], [290, 460], [376, 433], [435, 433], [376, 435], [250, 290], [392, 290], [250, 392], [411, 416], [433, 416], [411, 433], [341, 463], [464, 463], [341, 464], [453, 464], [465, 464], [453, 465], [357, 465], [412, 465], [357, 412], [343, 412], [399, 412], [343, 399], [360, 363], [440, 363], [360, 440], [437, 399], [456, 399], [437, 456], [420, 456], [363, 456], [420, 363], [401, 435], [288, 435], [401, 288], [372, 383], [353, 383], [372, 353], [339, 255], [249, 255], [339, 249], [448, 261], [255, 261], [448, 255], [133, 243], [190, 243], [133, 190], [133, 155], [112, 155], [133, 112], [33, 246], [247, 246], [33, 247], [33, 130], [25, 130], [33, 25], [398, 384], [286, 384], [398, 286], [362, 398], [414, 398], [362, 414], [362, 463], [341, 463], [362, 341], [263, 359], [467, 359], [263, 467], [263, 249], [255, 249], [263, 255], [466, 467], [260, 467], [466, 260], [75, 60], [166, 60], [75, 166], [238, 239], [79, 239], [238, 79], [162, 127], [139, 127], [162, 139], [72, 11], [37, 11], [72, 37], [121, 232], [120, 232], [121, 120], [73, 72], [39, 72], [73, 39], [114, 128], [47, 128], [114, 47], [233, 232], [128, 232], [233, 128], [103, 104], [67, 104], [103, 67], [152, 175], [148, 175], [152, 148], [173, 157], [155, 157], [173, 155], [119, 118], [101, 118], [119, 101], [74, 73], [40, 73], [74, 40], [107, 9], [108, 9], [107, 108], [49, 48], [131, 48], [49, 131], [32, 194], [211, 194], [32, 211], [184, 74], [185, 74], [184, 185], [191, 80], [183, 80], [191, 183], [185, 40], [186, 40], [185, 186], [119, 230], [118, 230], [119, 118], [210, 202], [214, 202], [210, 214], [84, 83], [17, 83], [84, 17], [77, 76], [146, 76], [77, 146], [161, 160], [30, 160], [161, 30], [190, 56], [173, 56], [190, 173], [182, 106], [194, 106], [182, 194], [138, 135], [192, 135], [138, 192], [129, 203], [98, 203], [129, 98], [54, 21], [68, 21], [54, 68], [5, 51], [4, 51], [5, 4], [145, 144], [23, 144], [145, 23], [90, 77], [91, 77], [90, 91], [207, 205], [187, 205], [207, 187], [83, 201], [18, 201], [83, 18], [181, 91], [182, 91], [181, 182], [180, 90], [181, 90], [180, 181], [16, 85], [17, 85], [16, 17], [205, 206], [36, 206], [205, 36], [176, 148], [140, 148], [176, 140], [165, 92], [39, 92], [165, 39], [245, 193], [244, 193], [245, 244], [27, 159], [28, 159], [27, 28], [30, 247], [161, 247], [30, 161], [174, 236], [196, 236], [174, 196], [103, 54], [104, 54], [103, 104], [55, 193], [8, 193], [55, 8], [111, 117], [31, 117], [111, 31], [221, 189], [55, 189], [221, 55], [240, 98], [99, 98], [240, 99], [142, 126], [100, 126], [142, 100], [219, 166], [218, 166], [219, 218], [112, 155], [26, 155], [112, 26], [198, 209], [131, 209], [198, 131], [169, 135], [150, 135], [169, 150], [114, 47], [217, 47], [114, 217], [224, 223], [53, 223], [224, 53], [220, 45], [134, 45], [220, 134], [32, 211], [140, 211], [32, 140], [109, 67], [108, 67], [109, 108], [146, 43], [91, 43], [146, 91], [231, 230], [120, 230], [231, 120], [113, 226], [247, 226], [113, 247], [105, 63], [52, 63], [105, 52], [241, 238], [242, 238], [241, 242], [124, 46], [156, 46], [124, 156], [95, 78], [96, 78], [95, 96], [70, 46], [63, 46], [70, 63], [116, 143], [227, 143], [116, 227], [116, 123], [111, 123], [116, 111], [1, 44], [19, 44], [1, 19], [3, 236], [51, 236], [3, 51], [207, 216], [205, 216], [207, 205], [26, 154], [22, 154], [26, 22], [165, 39], [167, 39], [165, 167], [199, 200], [208, 200], [199, 208], [101, 36], [100, 36], [101, 100], [43, 57], [202, 57], [43, 202], [242, 20], [99, 20], [242, 99], [56, 28], [157, 28], [56, 157], [124, 35], [113, 35], [124, 113], [29, 160], [27, 160], [29, 27], [211, 204], [210, 204], [211, 210], [124, 113], [46, 113], [124, 46], [106, 43], [204, 43], [106, 204], [96, 62], [77, 62], [96, 77], [227, 137], [116, 137], [227, 116], [73, 41], [72, 41], [73, 72], [36, 203], [142, 203], [36, 142], [235, 64], [240, 64], [235, 240], [48, 49], [64, 49], [48, 64], [42, 41], [74, 41], [42, 74], [214, 212], [207, 212], [214, 207], [183, 42], [184, 42], [183, 184], [210, 169], [211, 169], [210, 211], [140, 170], [176, 170], [140, 176], [104, 105], [69, 105], [104, 69], [193, 122], [168, 122], [193, 168], [50, 123], [187, 123], [50, 187], [89, 96], [90, 96], [89, 90], [66, 65], [107, 65], [66, 107], [179, 89], [180, 89], [179, 180], [119, 101], [120, 101], [119, 120], [68, 63], [104, 63], [68, 104], [234, 93], [227, 93], [234, 227], [16, 15], [85, 15], [16, 85], [209, 129], [49, 129], [209, 49], [15, 14], [86, 14], [15, 86], [107, 55], [9, 55], [107, 9], [120, 100], [121, 100], [120, 121], [153, 145], [22, 145], [153, 22], [178, 88], [179, 88], [178, 179], [197, 6], [196, 6], [197, 196], [89, 88], [96, 88], [89, 96], [135, 138], [136, 138], [135, 136], [138, 215], [172, 215], [138, 172], [218, 115], [219, 115], [218, 219], [41, 42], [81, 42], [41, 81], [5, 195], [51, 195], [5, 51], [57, 43], [61, 43], [57, 61], [208, 171], [199, 171], [208, 199], [41, 81], [38, 81], [41, 38], [224, 53], [225, 53], [224, 225], [24, 144], [110, 144], [24, 110], [105, 52], [66, 52], [105, 66], [118, 229], [117, 229], [118, 117], [227, 34], [234, 34], [227, 234], [66, 107], [69, 107], [66, 69], [10, 109], [151, 109], [10, 151], [219, 48], [235, 48], [219, 235], [183, 62], [191, 62], [183, 191], [142, 129], [126, 129], [142, 126], [116, 111], [143, 111], [116, 143], [7, 163], [246, 163], [7, 246], [118, 117], [50, 117], [118, 50], [223, 222], [52, 222], [223, 52], [94, 19], [141, 19], [94, 141], [222, 221], [65, 221], [222, 65], [196, 3], [197, 3], [196, 197], [45, 220], [44, 220], [45, 44], [156, 70], [139, 70], [156, 139], [188, 122], [245, 122], [188, 245], [139, 71], [162, 71], [139, 162], [145, 153], [159, 153], [145, 159], [149, 170], [150, 170], [149, 150], [122, 188], [196, 188], [122, 196], [206, 216], [92, 216], [206, 92], [163, 144], [161, 144], [163, 161], [164, 2], [167, 2], [164, 167], [242, 141], [241, 141], [242, 241], [0, 164], [37, 164], [0, 37], [11, 72], [12, 72], [11, 12], [144, 145], [160, 145], [144, 160], [12, 38], [13, 38], [12, 13], [70, 63], [71, 63], [70, 71], [31, 226], [111, 226], [31, 111], [157, 158], [154, 158], [157, 154], [36, 101], [205, 101], [36, 205], [203, 206], [165, 206], [203, 165], [126, 209], [217, 209], [126, 217], [98, 165], [97, 165], [98, 97], [237, 220], [218, 220], [237, 218], [237, 239], [241, 239], [237, 241], [210, 214], [169, 214], [210, 169], [140, 171], [32, 171], [140, 32], [241, 125], [237, 125], [241, 237], [179, 86], [178, 86], [179, 178], [180, 85], [179, 85], [180, 179], [181, 84], [180, 84], [181, 180], [182, 83], [181, 83], [182, 181], [194, 201], [182, 201], [194, 182], [177, 137], [132, 137], [177, 132], [184, 76], [183, 76], [184, 183], [185, 61], [184, 61], [185, 184], [186, 57], [185, 57], [186, 185], [216, 212], [186, 212], [216, 186], [192, 214], [187, 214], [192, 187], [139, 34], [156, 34], [139, 156], [218, 79], [237, 79], [218, 237], [147, 123], [177, 123], [147, 177], [45, 44], [4, 44], [45, 4], [208, 201], [32, 201], [208, 32], [98, 64], [129, 64], [98, 129], [192, 213], [138, 213], [192, 138], [235, 59], [219, 59], [235, 219], [141, 242], [97, 242], [141, 97], [97, 2], [141, 2], [97, 141], [240, 75], [235, 75], [240, 235], [229, 24], [228, 24], [229, 228], [31, 25], [226, 25], [31, 226], [230, 23], [229, 23], [230, 229], [231, 22], [230, 22], [231, 230], [232, 26], [231, 26], [232, 231], [233, 112], [232, 112], [233, 232], [244, 189], [243, 189], [244, 243], [189, 221], [190, 221], [189, 190], [222, 28], [221, 28], [222, 221], [223, 27], [222, 27], [223, 222], [224, 29], [223, 29], [224, 223], [225, 30], [224, 30], [225, 224], [113, 247], [225, 247], [113, 225], [99, 60], [240, 60], [99, 240], [213, 147], [215, 147], [213, 215], [60, 20], [166, 20], [60, 166], [192, 187], [213, 187], [192, 213], [243, 112], [244, 112], [243, 244], [244, 233], [245, 233], [244, 245], [245, 128], [188, 128], [245, 188], [188, 114], [174, 114], [188, 174], [134, 131], [220, 131], [134, 220], [174, 217], [236, 217], [174, 236], [236, 198], [134, 198], [236, 134], [215, 177], [58, 177], [215, 58], [156, 143], [124, 143], [156, 124], [25, 110], [7, 110], [25, 7], [31, 228], [25, 228], [31, 25], [264, 356], [368, 356], [264, 368], [0, 11], [267, 11], [0, 267], [451, 452], [349, 452], [451, 349], [267, 302], [269, 302], [267, 269], [350, 357], [277, 357], [350, 277], [350, 452], [357, 452], [350, 357], [299, 333], [297, 333], [299, 297], [396, 175], [377, 175], [396, 377], [381, 384], [382, 384], [381, 382], [280, 347], [330, 347], [280, 330], [269, 303], [270, 303], [269, 270], [151, 9], [337, 9], [151, 337], [344, 278], [360, 278], [344, 360], [424, 418], [431, 418], [424, 431], [270, 304], [409, 304], [270, 409], [272, 310], [407, 310], [272, 407], [322, 270], [410, 270], [322, 410], [449, 450], [347, 450], [449, 347], [432, 422], [434, 422], [432, 434], [18, 313], [17, 313], [18, 17], [291, 306], [375, 306], [291, 375], [259, 387], [260, 387], [259, 260], [424, 335], [418, 335], [424, 418], [434, 364], [416, 364], [434, 416], [391, 423], [327, 423], [391, 327], [301, 251], [298, 251], [301, 298], [275, 281], [4, 281], [275, 4], [254, 373], [253, 373], [254, 253], [375, 307], [321, 307], [375, 321], [280, 425], [411, 425], [280, 411], [200, 421], [18, 421], [200, 18], [335, 321], [406, 321], [335, 406], [321, 320], [405, 320], [321, 405], [314, 315], [17, 315], [314, 17], [423, 426], [266, 426], [423, 266], [396, 377], [369, 377], [396, 369], [270, 322], [269, 322], [270, 269], [413, 417], [464, 417], [413, 464], [385, 386], [258, 386], [385, 258], [248, 456], [419, 456], [248, 419], [298, 284], [333, 284], [298, 333], [168, 417], [8, 417], [168, 8], [448, 346], [261, 346], [448, 261], [417, 413], [285, 413], [417, 285], [326, 327], [328, 327], [326, 328], [277, 355], [329, 355], [277, 329], [309, 392], [438, 392], [309, 438], [381, 382], [256, 382], [381, 256], [279, 429], [360, 429], [279, 360], [365, 364], [379, 364], [365, 379], [355, 277], [437, 277], [355, 437], [282, 443], [283, 443], [282, 283], [281, 275], [363, 275], [281, 363], [395, 431], [369, 431], [395, 369], [299, 297], [337, 297], [299, 337], [335, 273], [321, 273], [335, 321], [348, 450], [349, 450], [348, 349], [359, 446], [467, 446], [359, 467], [283, 293], [282, 293], [283, 282], [250, 458], [462, 458], [250, 462], [300, 276], [383, 276], [300, 383], [292, 308], [325, 308], [292, 325], [283, 276], [293, 276], [283, 293], [264, 372], [447, 372], [264, 447], [346, 352], [340, 352], [346, 340], [354, 274], [19, 274], [354, 19], [363, 456], [281, 456], [363, 281], [426, 436], [425, 436], [426, 425], [380, 381], [252, 381], [380, 252], [267, 269], [393, 269], [267, 393], [421, 200], [428, 200], [421, 428], [371, 266], [329, 266], [371, 329], [432, 287], [422, 287], [432, 422], [290, 250], [328, 250], [290, 328], [385, 258], [384, 258], [385, 384], [446, 265], [342, 265], [446, 342], [386, 387], [257, 387], [386, 257], [422, 424], [430, 424], [422, 430], [445, 342], [276, 342], [445, 276], [422, 273], [424, 273], [422, 424], [306, 292], [307, 292], [306, 307], [352, 366], [345, 366], [352, 345], [268, 271], [302, 271], [268, 302], [358, 423], [371, 423], [358, 371], [327, 294], [460, 294], [327, 460], [331, 279], [294, 279], [331, 294], [303, 271], [304, 271], [303, 304], [436, 432], [427, 432], [436, 427], [304, 272], [408, 272], [304, 408], [395, 394], [431, 394], [395, 431], [378, 395], [400, 395], [378, 400], [296, 334], [299, 334], [296, 299], [6, 351], [168, 351], [6, 168], [376, 352], [411, 352], [376, 411], [307, 325], [320, 325], [307, 320], [285, 295], [336, 295], [285, 336], [320, 319], [404, 319], [320, 404], [329, 330], [349, 330], [329, 349], [334, 293], [333, 293], [334, 333], [366, 323], [447, 323], [366, 447], [316, 15], [315, 15], [316, 315], [331, 358], [279, 358], [331, 279], [317, 14], [316, 14], [317, 316], [8, 285], [9, 285], [8, 9], [277, 329], [350, 329], [277, 350], [253, 374], [252, 374], [253, 252], [319, 318], [403, 318], [319, 403], [351, 6], [419, 6], [351, 419], [324, 318], [325, 318], [324, 325], [397, 367], [365, 367], [397, 365], [288, 435], [397, 435], [288, 397], [278, 344], [439, 344], [278, 439], [310, 272], [311, 272], [310, 311], [248, 195], [281, 195], [248, 281], [375, 273], [291, 273], [375, 291], [175, 396], [199, 396], [175, 199], [312, 311], [268, 311], [312, 268], [276, 283], [445, 283], [276, 445], [390, 373], [339, 373], [390, 339], [295, 282], [296, 282], [295, 296], [448, 449], [346, 449], [448, 346], [356, 264], [454, 264], [356, 454], [337, 336], [299, 336], [337, 299], [337, 338], [151, 338], [337, 151], [294, 278], [455, 278], [294, 455], [308, 292], [415, 292], [308, 415], [429, 358], [355, 358], [429, 355], [265, 340], [372, 340], [265, 372], [388, 390], [466, 390], [388, 466], [352, 346], [280, 346], [352, 280], [295, 442], [282, 442], [295, 282], [354, 19], [370, 19], [354, 370], [285, 441], [295, 441], [285, 295], [195, 248], [197, 248], [195, 197], [457, 440], [274, 440], [457, 274], [301, 300], [368, 300], [301, 368], [417, 351], [465, 351], [417, 465], [251, 301], [389, 301], [251, 389], [385, 380], [386, 380], [385, 386], [394, 395], [379, 395], [394, 379], [399, 412], [419, 412], [399, 419], [410, 436], [322, 436], [410, 322], [387, 373], [388, 373], [387, 388], [326, 2], [393, 2], [326, 393], [354, 370], [461, 370], [354, 461], [393, 164], [267, 164], [393, 267], [268, 302], [12, 302], [268, 12], [386, 374], [387, 374], [386, 387], [312, 268], [13, 268], [312, 13], [298, 293], [301, 293], [298, 301], [265, 446], [340, 446], [265, 340], [380, 385], [381, 385], [380, 381], [280, 330], [425, 330], [280, 425], [322, 426], [391, 426], [322, 391], [420, 429], [437, 429], [420, 437], [393, 391], [326, 391], [393, 326], [344, 440], [438, 440], [344, 438], [458, 459], [461, 459], [458, 461], [364, 434], [394, 434], [364, 394], [428, 396], [262, 396], [428, 262], [274, 354], [457, 354], [274, 457], [317, 316], [402, 316], [317, 402], [316, 315], [403, 315], [316, 403], [315, 314], [404, 314], [315, 404], [314, 313], [405, 313], [314, 405], [313, 421], [406, 421], [313, 406], [323, 366], [361, 366], [323, 361], [292, 306], [407, 306], [292, 407], [306, 291], [408, 291], [306, 408], [291, 287], [409, 287], [291, 409], [287, 432], [410, 432], [287, 410], [427, 434], [411, 434], [427, 411], [372, 264], [383, 264], [372, 383], [459, 309], [457, 309], [459, 457], [366, 352], [401, 352], [366, 401], [1, 274], [4, 274], [1, 4], [418, 421], [262, 421], [418, 262], [331, 294], [358, 294], [331, 358], [435, 433], [367, 433], [435, 367], [392, 289], [439, 289], [392, 439], [328, 462], [326, 462], [328, 326], [94, 2], [370, 2], [94, 370], [289, 305], [455, 305], [289, 455], [339, 254], [448, 254], [339, 448], [359, 255], [446, 255], [359, 446], [254, 253], [449, 253], [254, 449], [253, 252], [450, 252], [253, 450], [252, 256], [451, 256], [252, 451], [256, 341], [452, 341], [256, 452], [414, 413], [463, 413], [414, 463], [286, 441], [414, 441], [286, 414], [286, 258], [441, 258], [286, 441], [258, 257], [442, 257], [258, 442], [257, 259], [443, 259], [257, 443], [259, 260], [444, 260], [259, 444], [260, 467], [445, 467], [260, 445], [309, 459], [250, 459], [309, 250], [305, 289], [290, 289], [305, 290], [305, 290], [460, 290], [305, 460], [401, 376], [435, 376], [401, 435], [309, 250], [392, 250], [309, 392], [376, 411], [433, 411], [376, 433], [453, 341], [464, 341], [453, 464], [357, 453], [465, 453], [357, 465], [343, 357], [412, 357], [343, 412], [437, 343], [399, 343], [437, 399], [344, 360], [440, 360], [344, 440], [420, 437], [456, 437], [420, 456], [360, 420], [363, 420], [360, 363], [361, 401], [288, 401], [361, 288], [265, 372], [353, 372], [265, 353], [390, 339], [249, 339], [390, 249], [339, 448], [255, 448], [339, 255]];
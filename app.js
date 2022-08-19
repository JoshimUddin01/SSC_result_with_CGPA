let btn = document.querySelector(".get_cgpa");

btn.addEventListener("click", () => {

            //Select all input value
    let bangla_first_cq_value = document.querySelector("#bangla_first_cq");
    let bangla_first_mcq_value = document.querySelector("#bangla_first_mcq");

    let bangla_secound_cq_value = document.querySelector("#bangla_secound_cq");
    let bangla_secound_mcq_value = document.querySelector("#bangla_secound_mcq");

    let english_first_paper_value = document.querySelector("#english_first_paper");
    let english_sec_paper_value = document.querySelector("#english_secound_paper");

    let gmath_cq_value = document.querySelector("#gmath_cq");
    let gmath_mcq_value = document.querySelector("#gmath_mcq");

    let islam_cq_value = document.querySelector("#islam_cq");
    let islam_mcq_value = document.querySelector("#islam_mcq");

    let higher_math_cq_value = document.querySelector("#higher_math_cq");
    let higher_math_mcq_value = document.querySelector("#higher_math_mcq");

    let pysics_cq_value = document.querySelector("#pysics_cq");
    let pysics_mcq_value = document.querySelector("#pysics_mcq");

    let chemestry_cq_value = document.querySelector("#chemestry_cq");
    let chemestry_mcq_value = document.querySelector("#chemestry_mcq");

    let biology_cq_value = document.querySelector("#biology_cq");
    let biology_mcq_value = document.querySelector("#biology_mcq");

    let global_cq_value = document.querySelector("#global_cq");
    let global_mcq_value = document.querySelector("#global_mcq");




    //Creating a obejct to store the user value data
    let subject_data_object = {
        bangla: {
            first: {
                cq: bangla_first_cq_value.value,
                mcq: bangla_first_mcq_value.value,
            },
            secound: {
                cq: bangla_secound_cq_value.value,
                mcq: bangla_secound_mcq_value.value,
            }
        },
        english: {
            first: {
                total: english_first_paper_value.value,
            },
            secound: {
                total: english_sec_paper_value.value,
            }
        },
        gmath: {
            cq: gmath_cq_value.value,
            mcq: gmath_mcq_value.value,
        },
        islam: {
            cq: islam_cq_value.value,
            mcq: islam_mcq_value.value,
        },
        higher_math: {
            cq: higher_math_cq_value.value,
            mcq: higher_math_mcq_value.value,
        },
        pysics: {
            cq: pysics_cq_value.value,
            mcq: pysics_mcq_value.value,
        },
        chemestry: {
            cq: chemestry_cq_value.value,
            mcq: chemestry_mcq_value.value,
        },
        biology: {
            cq: biology_cq_value.value,
            mcq: biology_mcq_value.value,
        },
        global: {
            cq: global_cq_value.value,
            mcq: global_mcq_value.value,
        }
    }



    if (subject_data_object.bangla.first.cq.length < 1 || subject_data_object.bangla.first.mcq.length < 1 || subject_data_object.bangla.secound.cq.length < 1 || subject_data_object.bangla.secound.mcq.length < 1 || subject_data_object.english.first.total.length < 1 || subject_data_object.english.secound.total.length < 1 || subject_data_object.gmath.cq.length < 1 || subject_data_object.gmath.mcq.length < 1 || subject_data_object.islam.cq.length < 1 || subject_data_object.islam.mcq.length < 1 || subject_data_object.higher_math.cq.length < 1 || subject_data_object.higher_math.mcq.length < 1 || subject_data_object.pysics.cq.length < 1 || subject_data_object.pysics.mcq.length < 1 || subject_data_object.chemestry.cq.length < 1 || subject_data_object.chemestry.mcq.length < 1 || subject_data_object.global.cq.length < 1 || subject_data_object.global.mcq.length < 1) {

        let alaert_modal = document.querySelector(".input_field_empty");

        alaert_modal.click()
    } else {
        if (subject_data_object.bangla.first.cq > 70 ||  subject_data_object.bangla.secound.cq > 70 ||  subject_data_object.gmath.cq > 70 || subject_data_object.islam.cq > 70  || subject_data_object.higher_math.cq > 70  || subject_data_object.pysics.cq > 70  > 70 || subject_data_object.chemestry.cq > 70|| subject_data_object.global.cq > 70 ) {
           
            let invalid_cq_number_modal = document.querySelector(".invalid_cq_number");
            invalid_cq_number_modal.click()
        }
        else {
            if( subject_data_object.bangla.first.mcq > 30 || subject_data_object.bangla.secound.mcq > 30 || subject_data_object.gmath.mcq > 30 || subject_data_object.islam.mcq > 30 || subject_data_object.higher_math.mcq > 30 || subject_data_object.pysics.mcq > 30 || subject_data_object.chemestry.mcq > 30 ||  subject_data_object.global.mcq > 30) {
                
                let invalid_mcq_number_modal = document.querySelector(".invalid_mcq_number");
                invalid_mcq_number_modal.click();
        
            }
            else {
                if (subject_data_object.english.first.total > 100 || subject_data_object.english.secound.total > 100) {
                   
                    let invalid_english_number_modal = document.querySelector(".invalid_english_number");
                    invalid_english_number_modal.click()
                }
                else {
                    let input_section = document.querySelector(".register")
let result_section = document.querySelector(".result_secound_section");
input_section.style.opacity = "0"

setTimeout(() => {
    result_section.style.display = "block"
    input_section.style.display = "none"
}, 400)

setInterval(() => {
    result_section.style.opacity = "1";
}, 500)



//function for get grade only
function get_grade(subject_total_number) {
    if (subject_total_number >= 80 && subject_total_number < 101) {
        return " A+"
    } else if (subject_total_number >= 70 && subject_total_number < 79) {
        return "A"

    } else if (subject_total_number >= 60 && subject_total_number < 69) {
        return "A-"

    } else if (subject_total_number >= 50 && subject_total_number < 59) {
        return "B"

    } else if (subject_total_number >= 40 && subject_total_number < 49) {
        return "C"

    } else if (subject_total_number >= 33 && subject_total_number < 39) {
        return "D"

    } else {
        return "Fail"
    }

}


//function for get grade points only

function get_grade_point(subject_total_number) {
    if (subject_total_number >= 80 && subject_total_number < 100) {
        return 5;
    } else if (subject_total_number >= 70 && subject_total_number < 79) {
        return 4;

    } else if (subject_total_number >= 60 && subject_total_number < 69) {
        return 3.5

    } else if (subject_total_number >= 50 && subject_total_number < 59) {
        return 3

    } else if (subject_total_number >= 40 && subject_total_number < 49) {
        return 2

    } else if (subject_total_number >= 33 && subject_total_number < 39) {
        return 1

    } else {
        return 0;
    }

}


//result section step by step subject value
//Bangla 1st paper
let bangla_first_cq_number = parseInt(subject_data_object.bangla.first.cq);
let bangla_first_mcq_number = parseInt(subject_data_object.bangla.first.mcq);
let bangla_first_total_number = bangla_first_cq_number + bangla_first_mcq_number;


let bangla_first_grade_point = document.querySelector(".student_bangla_first_grade_point");
let grade_point_bangla_first = get_grade_point(bangla_first_total_number)
bangla_first_grade_point.innerHTML = grade_point_bangla_first;

let bangla_first_grade = document.querySelector(".student_bangla_first_grade");
let grade_letter_bangla_first = get_grade(bangla_first_total_number);
bangla_first_grade.innerHTML = grade_letter_bangla_first;


let bangla_first_cq_number_show = document.querySelector(".student_bangla_first_cq_number");
bangla_first_cq_number_show.innerHTML = bangla_first_cq_number;

let bangla_first_mcq_number_show = document.querySelector(".student_bangla_first_mcq_number");
bangla_first_mcq_number_show.innerHTML = bangla_first_mcq_number;


//Bangla 2nd paper
let bangla_sec_cq_number = parseInt(subject_data_object.bangla.secound.cq);
let bangla_sec_mcq_number = parseInt(subject_data_object.bangla.secound.mcq);
let bangla_sec_total_number = bangla_sec_cq_number + bangla_sec_mcq_number;


let bangla_sec_grade_point = document.querySelector(".student_bangla_sec_grade_point");
let grade_point_bangla_sec = get_grade_point(bangla_sec_total_number)
bangla_sec_grade_point.innerHTML = grade_point_bangla_sec;

let bangla_sec_grade = document.querySelector(".student_bangla_sec_grade");
let grade_letter_bangla_sec = get_grade(bangla_sec_total_number);
bangla_sec_grade.innerHTML = grade_letter_bangla_sec;


let bangla_sec_cq_number_show = document.querySelector(".student_bangla_sec_cq_number");
bangla_sec_cq_number_show.innerHTML = bangla_sec_cq_number;

let bangla_sec_mcq_number_show = document.querySelector(".student_bangla_sec_mcq_number");
bangla_sec_mcq_number_show.innerHTML = bangla_sec_mcq_number;



//English 1st paper
let english_first_total_number = parseInt(subject_data_object.english.first.total);
let english_first_total_number_show = document.querySelector(".student_english_first_total_number");

english_first_total_number_show.innerHTML = english_first_total_number;

let english_first_grade_point = document.querySelector(".student_english_first_grade_point");
let grade_point_english_first = get_grade_point(english_first_total_number)
english_first_grade_point.innerHTML = grade_point_english_first;

let english_first_grade = document.querySelector(".student_english_first_grade");
let grade_letter_english_first = get_grade(english_first_total_number);
english_first_grade.innerHTML = grade_letter_english_first;


//English 2nd paper
let english_sec_total_number = parseInt(subject_data_object.english.secound.total);
let english_sec_total_number_show = document.querySelector(".student_english_sec_total_number");

english_sec_total_number_show.innerHTML = english_sec_total_number;


let english_sec_grade_point = document.querySelector(".student_english_sec_grade_point");
let grade_point_english_sec = get_grade_point(english_sec_total_number)
english_sec_grade_point.innerHTML = grade_point_english_sec;

let english_sec_grade = document.querySelector(".student_english_sec_grade");
let grade_letter_english_sec = get_grade(english_sec_total_number);
english_sec_grade.innerHTML = grade_letter_english_sec;

//Genarel Math 
let gmath_cq_number = parseInt(subject_data_object.gmath.cq);
let gmath_mcq_number = parseInt(subject_data_object.gmath.mcq);
let gmath_total_number = gmath_cq_number + gmath_mcq_number;



let gmath_grade_point = document.querySelector(".student_gmath_grade_point");
let grade_point_gmath = get_grade_point(gmath_total_number)
gmath_grade_point.innerHTML = grade_point_gmath;

let gmath_grade = document.querySelector(".student_gmath_grade");
let grade_letter_gmath = get_grade(gmath_total_number);
gmath_grade.innerHTML = grade_letter_gmath;




let gmath_cq_number_show = document.querySelector(".student_gmath_cq_number");
gmath_cq_number_show.innerHTML = gmath_cq_number;

let gmath_mcq_number_show = document.querySelector(".student_gmath_mcq_number");
gmath_mcq_number_show.innerHTML = gmath_mcq_number;



//Islam and moral education
let islam_cq_number = parseInt(subject_data_object.islam.cq);
let islam_mcq_number = parseInt(subject_data_object.islam.mcq);
let islam_total_number = islam_cq_number + islam_mcq_number;



let islam_grade_point = document.querySelector(".student_islam_number_grade_point");
let islam_point_grade = get_grade_point(islam_total_number)
islam_grade_point.innerHTML = islam_point_grade;

let islam_grade = document.querySelector(".student_islam_number_grade");
let grade_letter_islam = get_grade(islam_total_number);
islam_grade.innerHTML = grade_letter_islam;



let islam_cq_number_show = document.querySelector(".student_islam_cq_number");
islam_cq_number_show.innerHTML = islam_cq_number;

let islam_mcq_number_show = document.querySelector(".student_islam_mcq_number");
islam_mcq_number_show.innerHTML = islam_mcq_number;



//Higher Math 
let higher_math_cq_number = parseInt(subject_data_object.higher_math.cq);
let higher_math_mcq_number = parseInt(subject_data_object.higher_math.mcq);
let higher_math_total_number = higher_math_cq_number + higher_math_mcq_number;


let higher_math_grade_point = document.querySelector(".student_higher_math_grade_point");
let higher_math_point_gmath = get_grade_point(higher_math_total_number)
higher_math_grade_point.innerHTML = higher_math_point_gmath;

let higher_math_grade = document.querySelector(".student_higher_math_grade");
let grade_letter_higher_math = get_grade(higher_math_total_number);
higher_math_grade.innerHTML = grade_letter_higher_math;



let higher_math_cq_number_show = document.querySelector(".student_higher_math_cq_number");
higher_math_cq_number_show.innerHTML = higher_math_cq_number;

let higher_math_mcq_number_show = document.querySelector(".student_higher_math_mcq_number");
higher_math_mcq_number_show.innerHTML = higher_math_mcq_number;


//Pysics 
let pysics_cq_number = parseInt(subject_data_object.pysics.cq);
let pysics_mcq_number = parseInt(subject_data_object.pysics.mcq);
let pysics_total_number = pysics_cq_number + pysics_mcq_number;



let pysics_grade_point = document.querySelector(".student_pysics_grade_point");
let grade_point_pysics = get_grade_point(pysics_total_number)
pysics_grade_point.innerHTML = grade_point_pysics;

let pysics_grade = document.querySelector(".student_pysics_grade");
let grade_letter_pysics = get_grade(pysics_total_number);
pysics_grade.innerHTML = grade_letter_pysics;




let pysics_cq_number_show = document.querySelector(".student_pysics_cq_number");
pysics_cq_number_show.innerHTML = pysics_cq_number;

let pysics_mcq_number_show = document.querySelector(".student_pysics_mcq_number");
pysics_mcq_number_show.innerHTML = pysics_mcq_number;



//Chemestry 
let chemestry_cq_number = parseInt(subject_data_object.chemestry.cq);
let chemestry_mcq_number = parseInt(subject_data_object.chemestry.mcq);
let chemestry_total_number = chemestry_cq_number + chemestry_mcq_number;



let chemestry_grade_point = document.querySelector(".student_chemestry_grade_point");
let grade_point_chemestry = get_grade_point(chemestry_total_number)
chemestry_grade_point.innerHTML = grade_point_chemestry;

let chemestry_grade = document.querySelector(".student_chemestryt_grade");
let grade_letter_chemestry = get_grade(chemestry_total_number);
chemestry_grade.innerHTML = grade_letter_chemestry;




let chemestry_cq_number_show = document.querySelector(".student_chemestry_cq_number");
chemestry_cq_number_show.innerHTML = chemestry_cq_number;

let chemestry_mcq_number_show = document.querySelector(".student_chemestry_mcq_number");
chemestry_mcq_number_show.innerHTML = chemestry_mcq_number;


//Bilogy 
let biology_cq_number = parseInt(subject_data_object.biology.cq);
let biology_mcq_number = parseInt(subject_data_object.biology.mcq);
let biology_total_number = biology_cq_number + biology_mcq_number;


let biology_grade_point = document.querySelector(".student_biology_grade_point");
let grade_point_biology = get_grade_point(biology_total_number)
biology_grade_point.innerHTML = grade_point_biology;

let biology_grade = document.querySelector(".student_biology_grade");
let grade_letter_biology = get_grade(biology_total_number);
biology_grade.innerHTML = grade_letter_biology;



let biology_cq_number_show = document.querySelector(".student_biology_cq_number");
biology_cq_number_show.innerHTML = biology_cq_number;

let biology_mcq_number_show = document.querySelector(".student_biology_mcq_number");
biology_mcq_number_show.innerHTML = biology_mcq_number;


//Bangladesh and Global 
let global_cq_number = parseInt(subject_data_object.global.cq);
let global_mcq_number = parseInt(subject_data_object.global.mcq);
let global_total_number = global_cq_number + global_mcq_number;



let global_grade_point = document.querySelector(".student_global_grade_point");
let grade_point_global = get_grade_point(global_total_number)
global_grade_point.innerHTML = grade_point_global;

let global_grade = document.querySelector(".student_global_grade");
let grade_letter_global = get_grade(global_total_number);
global_grade.innerHTML = grade_letter_global;



let global_cq_number_show = document.querySelector(".student_global_cq_number");
global_cq_number_show.innerHTML = global_cq_number;

let global_mcq_number_show = document.querySelector(".student_global_mcq_number");
global_mcq_number_show.innerHTML = global_mcq_number;



//CGPA Calculation section started
//if else condition

if (grade_point_bangla_first === 0 || grade_point_bangla_sec === 0 || grade_point_english_first === 0 || grade_point_english_sec === 0 || grade_point_gmath === 0 || islam_point_grade === 0 || higher_math_point_gmath === 0 || grade_point_pysics === 0 || grade_point_chemestry === 0 || grade_point_biology === 0 || grade_point_global === 0) {

    let get_sec = document.querySelector(".if_no_fail");
    get_sec.style.display = "none";


} else {
    let if_fail_sec = document.querySelector(".if_fail_sec");
    if_fail_sec.style.display = "none";


    let gpa_bangla_first = document.querySelector(".gpa_bangla_first");
    let gpa_bangla_sec = document.querySelector(".gpa_bangla_sec");
    let gpa_english_first = document.querySelector(".gpa_english_first");
    let gpa_english_sec = document.querySelector(".gpa_english_sec");
    let gpa_gmath = document.querySelector(".gpa_gmath");
    let gpa_islam = document.querySelector(".gpa_islam");
    let gpa_higher_math = document.querySelector(".gpa_higher_math");
    let gpa_pysics = document.querySelector(".gpa_pysics");
    let gpa_chemestry = document.querySelector(".gpa_chemestry");
    let gpa_biology = document.querySelector(".gpa_biology");
    let gpa_global = document.querySelector(".gpa_global");

    gpa_bangla_first.innerHTML = grade_point_bangla_first
    gpa_bangla_sec.innerHTML = grade_point_bangla_sec;
    gpa_english_first.innerHTML = grade_point_english_first;
    gpa_english_sec.innerHTML = grade_point_english_sec;
    gpa_gmath.innerHTML = grade_point_gmath;
    gpa_islam.innerHTML = islam_point_grade;
    gpa_higher_math.innerHTML = higher_math_point_gmath;
    gpa_pysics.innerHTML = grade_point_pysics;
    gpa_chemestry.innerHTML = grade_point_chemestry;
    gpa_biology.innerHTML = grade_point_biology;
    gpa_global.innerHTML = grade_point_global;


    //total GPA calculate and CGPA calculation
    let total_subject_gpa = grade_point_bangla_first + grade_point_bangla_sec + grade_point_english_first + grade_point_english_sec + grade_point_gmath + islam_point_grade + higher_math_point_gmath + grade_point_pysics + grade_point_chemestry + grade_point_biology + grade_point_global;

    let total_subject_gpa_show = document.querySelector(".total_gpa_sum");
    total_subject_gpa_show.innerHTML = total_subject_gpa;

    let show_total_gpa_again = document.querySelector(".total_gpa_sum_details");
    show_total_gpa_again.innerHTML = total_subject_gpa;

    let final_gpa_show = document.querySelector(".total_gpa_final_calculation_show");
    final_gpa_show.innerHTML = "(" +  total_subject_gpa + "x 4 ) ";

    let cgpa_final = ((total_subject_gpa*4) / 44);
    let user_cgpa_show = document.querySelector(".user_cgpa_show");


        user_cgpa_show.innerHTML =  cgpa_final.toFixed(2);

        if(cgpa_final < 4) {
        user_cgpa_show.innerHTML =  cgpa_final.toFixed(2);
        }
        else {
            user_cgpa_show.innerHTML =  4 + ".00";
        }
   

//Getting CGPA grade 

//function for get CGPA grade only

function get_cgpa_grade_only(total_cgpa_point) {
    if (total_cgpa_point >= 4) {
        return " A+"
    } else if (total_cgpa_point >= 3.75 && total_cgpa_point < 4 ) {
        return "A"

    } else if (total_cgpa_point >= 3.50 && total_cgpa_point < 3.75) {
        return "A-"

    } else if (total_cgpa_point >= 3.25 && total_cgpa_point <= 3.50) {
        return "B+"

    } else if (total_cgpa_point >= 3.00 && total_cgpa_point <= 3.25) {
        return "B"

    } else if (total_cgpa_point >= 2.75 && total_cgpa_point < 3.00) {
        return "B-"

    }else if (total_cgpa_point >= 2.50 && total_cgpa_point < 2.75) {
        return "C+"

    }else if (total_cgpa_point >= 2.25 && total_cgpa_point < 2.50) {
        return "C"

    }else if (total_cgpa_point >= 2.00 && total_cgpa_point < 2.25) {
        return "D"

    } else {  
        return "Fail"
    }

}

        let cgpa_grade_sec = document.querySelector(".cgpa_grade");
        cgpa_grade_sec.innerHTML = "Your CGPA grade is: " + get_cgpa_grade_only(cgpa_final);


}
                    
                }
            }
        }
        
        
    }
})

//For showing the result when user press "Enter" Button insted of click on "Get CGPA" btn
document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter") {
      btn.click()
    }
})


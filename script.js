/*
  MATH RECOVERY DIAGNOSTIC V2

  IMPORTANT:
  Replace GOOGLE_APPS_SCRIPT_URL below with your deployed Google Apps Script
  Web App URL before launching.
*/

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxrVLX6k3gzgQRwOTtoLp5S_u5iXyegH_rLGTbblWeLqdXLaaKPanSwrGR8q_7pU-_lZQ/exec";

const coreQuestions = [
  {
    id: "Q1",
    category: "NUMBER_SENSE",
    categoryLabel: "Number Sense",
    skill: "ORDER_OF_OPERATIONS",
    question: "What is 2 + 3 × 4 − 1?",
    options: ["13", "19", "11", "15"],
    answer: "13"
  },
  {
    id: "Q2",
    category: "NUMBER_SENSE",
    categoryLabel: "Number Sense",
    skill: "INTEGER_OPERATIONS",
    question: "What is −8 + 13 − 6?",
    options: ["−1", "1", "−11", "11"],
    answer: "−1"
  },
  {
    id: "Q3",
    category: "NUMBER_SENSE",
    categoryLabel: "Number Sense",
    skill: "MULTIPLICATION_DIVISION",
    question: "What is 48 × 6 ÷ 12?",
    options: ["24", "18", "36", "48"],
    answer: "24"
  },
  {
    id: "Q4",
    category: "NUMBER_SENSE",
    categoryLabel: "Number Sense",
    skill: "GCF",
    question: "What is the greatest common factor of 36 and 48?",
    options: ["6", "12", "18", "24"],
    answer: "12"
  },
  {
    id: "Q5",
    category: "FRACTIONS",
    categoryLabel: "Fractions / Decimals / Percentages",
    skill: "FRACTION_ADDITION",
    question: "What is 3/4 + 2/3?",
    options: ["5/7", "17/12", "13/12", "6/7"],
    answer: "17/12"
  },
  {
    id: "Q6",
    category: "FRACTIONS",
    categoryLabel: "Fractions / Decimals / Percentages",
    skill: "FRACTION_MULTIPLICATION",
    question: "What is 3/4 × 2/5?",
    options: ["3/10", "5/9", "6/9", "3/20"],
    answer: "3/10"
  },
  {
    id: "Q7",
    category: "FRACTIONS",
    categoryLabel: "Fractions / Decimals / Percentages",
    skill: "DECIMAL_OPERATIONS",
    question: "What is 3.6 × 0.5?",
    options: ["1.8", "1.3", "18", "0.18"],
    answer: "1.8"
  },
  {
    id: "Q8",
    category: "FRACTIONS",
    categoryLabel: "Fractions / Decimals / Percentages",
    skill: "PERCENTAGE_CALCULATION",
    question: "What is 15% of 240?",
    options: ["24", "30", "36", "40"],
    answer: "36"
  },
  {
    id: "Q9",
    category: "ALGEBRA_FOUNDATIONS",
    categoryLabel: "Algebra Foundations",
    skill: "LINEAR_EQUATIONS_BASIC",
    question: "Solve: 3x + 7 = 22.",
    options: ["x = 3", "x = 5", "x = 7", "x = 9"],
    answer: "x = 5"
  },
  {
    id: "Q10",
    category: "ALGEBRA_FOUNDATIONS",
    categoryLabel: "Algebra Foundations",
    skill: "COMBINING_LIKE_TERMS",
    question: "Simplify: 3x + 5 + 2x − 1.",
    options: ["5x + 4", "5x + 6", "6x + 4", "x + 4"],
    answer: "5x + 4"
  },
  {
    id: "Q11",
    category: "ALGEBRA_FOUNDATIONS",
    categoryLabel: "Algebra Foundations",
    skill: "DISTRIBUTIVE_PROPERTY",
    question: "Simplify: 3(x + 4).",
    options: ["3x + 4", "3x + 12", "x + 12", "7x"],
    answer: "3x + 12"
  },
  {
    id: "Q12",
    category: "ALGEBRA_FOUNDATIONS",
    categoryLabel: "Algebra Foundations",
    skill: "EXPONENT_RULES",
    question: "Simplify: x³ × x⁴.",
    options: ["x¹²", "x⁷", "2x⁷", "x"],
    answer: "x⁷"
  },
  {
    id: "Q13",
    category: "COORDINATE_FUNCTIONS",
    categoryLabel: "Coordinate Algebra & Functions",
    skill: "MIDPOINT",
    question: "What is the midpoint of (2, 4) and (8, 10)?",
    options: ["(4, 6)", "(5, 7)", "(6, 8)", "(10, 14)"],
    answer: "(5, 7)"
  },
  {
    id: "Q14",
    category: "COORDINATE_FUNCTIONS",
    categoryLabel: "Coordinate Algebra & Functions",
    skill: "SLOPE_CALCULATION",
    question: "What is the slope of the line through (2, 3) and (6, 11)?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    id: "Q15",
    category: "COORDINATE_FUNCTIONS",
    categoryLabel: "Coordinate Algebra & Functions",
    skill: "FUNCTION_EVALUATION",
    question: "If f(x) = 2x² − 3, what is f(−2)?",
    options: ["−11", "1", "5", "11"],
    answer: "5"
  },
  {
    id: "Q16",
    category: "GEOMETRY",
    categoryLabel: "Geometry",
    skill: "PYTHAGOREAN_THEOREM",
    question: "A right triangle has legs of 6 cm and 8 cm. What is the hypotenuse?",
    options: ["9 cm", "10 cm", "12 cm", "14 cm"],
    answer: "10 cm"
  },
  {
    id: "Q17",
    category: "GEOMETRY",
    categoryLabel: "Geometry",
    skill: "POLYGON_ANGLES",
    question: "What is the sum of the interior angles of a hexagon?",
    options: ["540°", "600°", "720°", "900°"],
    answer: "720°"
  },
  {
    id: "Q18",
    category: "GEOMETRY",
    categoryLabel: "Geometry",
    skill: "AREA_RECTANGLE",
    question: "A rectangle is 8 cm long and 5 cm wide. What is its area?",
    options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
    answer: "40 cm²"
  },
  {
    id: "Q19",
    category: "PROBLEM_SOLVING",
    categoryLabel: "Problem Solving",
    skill: "RATIOS_PROPORTIONS",
    question: "A recipe uses 2 cups of flour for every 3 cups of sugar. If you use 6 cups of sugar, how much flour is needed?",
    options: ["3 cups", "4 cups", "5 cups", "6 cups"],
    answer: "4 cups"
  },
  {
    id: "Q20",
    category: "PROBLEM_SOLVING",
    categoryLabel: "Problem Solving",
    skill: "WORD_PROBLEMS_LINEAR",
    question: "A service charges a fixed fee of $50 plus $20 per hour. If the total bill is $130, how many hours were charged?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    answer: "4 hours"
  }
];

const targetedModules = {
  ALGEBRA: {
    label: "Algebra",
    questions: [
      {
        id: "A1",
        category: "TARGETED_ALGEBRA",
        categoryLabel: "Targeted: Algebra",
        skill: "LINEAR_EQUATIONS_MULTISTEP",
        question: "Solve: 2x + 5 = 17.",
        options: ["x = 5", "x = 6", "x = 7", "x = 11"],
        answer: "x = 6"
      },
      {
        id: "A2",
        category: "TARGETED_ALGEBRA",
        categoryLabel: "Targeted: Algebra",
        skill: "FACTORING_QUADRATICS",
        question: "Factor: x² + 5x + 6.",
        options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 5)(x + 1)"],
        answer: "(x + 2)(x + 3)"
      },
      {
        id: "A3",
        category: "TARGETED_ALGEBRA",
        categoryLabel: "Targeted: Algebra",
        skill: "SYSTEMS_LINEAR",
        question: "Solve the system: y = 2x + 1 and y = −x + 7.",
        options: ["(1, 3)", "(2, 5)", "(3, 7)", "(4, 9)"],
        answer: "(2, 5)"
      },
      {
        id: "A4",
        category: "TARGETED_ALGEBRA",
        categoryLabel: "Targeted: Algebra",
        skill: "LINEAR_FUNCTION_INTERPRETATION",
        question: "For a line with a positive slope, what happens as x increases?",
        options: ["y generally increases", "y generally decreases", "y stays constant", "x becomes zero"],
        answer: "y generally increases"
      }
    ]
  },

  GEOMETRY: {
    label: "Geometry",
    questions: [
      {
        id: "G1",
        category: "TARGETED_GEOMETRY",
        categoryLabel: "Targeted: Geometry",
        skill: "ANGLE_RELATIONSHIPS",
        question: "Two angles are supplementary. If one angle is 65°, what is the other?",
        options: ["25°", "105°", "115°", "125°"],
        answer: "115°"
      },
      {
        id: "G2",
        category: "TARGETED_GEOMETRY",
        categoryLabel: "Targeted: Geometry",
        skill: "TRIANGLE_ANGLES",
        question: "A triangle has angles of 45° and 65°. What is the third angle?",
        options: ["60°", "70°", "75°", "80°"],
        answer: "70°"
      },
      {
        id: "G3",
        category: "TARGETED_GEOMETRY",
        categoryLabel: "Targeted: Geometry",
        skill: "SPECIAL_TRIANGLES",
        question: "In a 30-60-90 triangle, the short leg is 5 cm. What is the hypotenuse?",
        options: ["5 cm", "5√2 cm", "10 cm", "15 cm"],
        answer: "10 cm"
      },
      {
        id: "G4",
        category: "TARGETED_GEOMETRY",
        categoryLabel: "Targeted: Geometry",
        skill: "CIRCLE_MEASUREMENT",
        question: "What is the circumference of a circle with radius 4 cm? Use π exactly.",
        options: ["4π cm", "8π cm", "12π cm", "16π cm"],
        answer: "8π cm"
      }
    ]
  },

  TRIGONOMETRY: {
    label: "Trigonometry",
    questions: [
      {
        id: "T1",
        category: "TARGETED_TRIG",
        categoryLabel: "Targeted: Trigonometry",
        skill: "SPECIAL_ANGLE_TRIG",
        question: "What is sin(30°)?",
        options: ["0", "1/2", "√2/2", "1"],
        answer: "1/2"
      },
      {
        id: "T2",
        category: "TARGETED_TRIG",
        categoryLabel: "Targeted: Trigonometry",
        skill: "SPECIAL_ANGLE_TRIG",
        question: "What is cos(60°)?",
        options: ["0", "1/2", "√2/2", "1"],
        answer: "1/2"
      },
      {
        id: "T3",
        category: "TARGETED_TRIG",
        categoryLabel: "Targeted: Trigonometry",
        skill: "RIGHT_TRIANGLE_TRIG",
        question: "In a right triangle, which ratio equals opposite ÷ hypotenuse?",
        options: ["sine", "cosine", "tangent", "secant"],
        answer: "sine"
      },
      {
        id: "T4",
        category: "TARGETED_TRIG",
        categoryLabel: "Targeted: Trigonometry",
        skill: "TRIG_APPLICATIONS",
        question: "A right triangle has a 10 cm hypotenuse and a 30° angle. What is the side opposite the 30° angle?",
        options: ["3 cm", "5 cm", "8 cm", "10 cm"],
        answer: "5 cm"
      }
    ]
  },

  PRECALCULUS: {
    label: "Precalculus / Advanced Algebra",
    questions: [
      {
        id: "P1",
        category: "TARGETED_PRECALC",
        categoryLabel: "Targeted: Precalculus",
        skill: "FUNCTION_EVALUATION",
        question: "If f(x) = 2x² − 3, what is f(−2)?",
        options: ["−11", "1", "5", "11"],
        answer: "5"
      },
      {
        id: "P2",
        category: "TARGETED_PRECALC",
        categoryLabel: "Targeted: Precalculus",
        skill: "FACTORING_QUADRATICS",
        question: "Factor: x² + 5x + 6.",
        options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 5)(x + 1)"],
        answer: "(x + 2)(x + 3)"
      },
      {
        id: "P3",
        category: "TARGETED_PRECALC",
        categoryLabel: "Targeted: Precalculus",
        skill: "LOGARITHMS_FOUNDATION",
        question: "Solve: log₂(x) = 5.",
        options: ["10", "16", "25", "32"],
        answer: "32"
      },
      {
        id: "P4",
        category: "TARGETED_PRECALC",
        categoryLabel: "Targeted: Precalculus",
        skill: "EXPONENT_LOG_RELATIONSHIP",
        question: "Solve: 2ˣ = 16.",
        options: ["2", "3", "4", "8"],
        answer: "4"
      }
    ]
  },

  CALCULUS: {
    label: "Calculus",
    questions: [
      {
        id: "C1",
        category: "TARGETED_CALCULUS",
        categoryLabel: "Targeted: Calculus",
        skill: "FUNCTION_FOUNDATION",
        question: "If f(x) = x² + 2, what is f(3)?",
        options: ["5", "9", "11", "12"],
        answer: "11"
      },
      {
        id: "C2",
        category: "TARGETED_CALCULUS",
        categoryLabel: "Targeted: Calculus",
        skill: "RATIONAL_EXPRESSIONS",
        question: "For x ≠ 2, simplify (x² − 4)/(x − 2).",
        options: ["x − 2", "x + 2", "x² + 2", "x² − 2"],
        answer: "x + 2"
      },
      {
        id: "C3",
        category: "TARGETED_CALCULUS",
        categoryLabel: "Targeted: Calculus",
        skill: "LIMIT_FOUNDATION",
        question: "What is lim x→2 of x²?",
        options: ["2", "4", "6", "8"],
        answer: "4"
      },
      {
        id: "C4",
        category: "TARGETED_CALCULUS",
        categoryLabel: "Targeted: Calculus",
        skill: "LIMIT_ALGEBRAIC_SIMPLIFICATION",
        question: "What is lim x→2 of (x² − 4)/(x − 2)?",
        options: ["2", "3", "4", "6"],
        answer: "4"
      }
    ]
  }
};

const recoveryActions = {
  ORDER_OF_OPERATIONS: "Practice the order of operations with mixed arithmetic expressions.",
  INTEGER_OPERATIONS: "Review adding and subtracting positive and negative integers.",
  MULTIPLICATION_DIVISION: "Build multiplication and division fluency before moving to multi-step arithmetic.",
  GCF: "Practice factors, multiples, and greatest common factor.",
  FRACTION_ADDITION: "Review common denominators and adding fractions with unlike denominators.",
  FRACTION_MULTIPLICATION: "Practice multiplying numerators and denominators, then simplify.",
  DECIMAL_OPERATIONS: "Practice decimal multiplication and place-value reasoning.",
  PERCENTAGE_CALCULATION: "Review converting percentages to decimals and finding a percentage of a quantity.",
  LINEAR_EQUATIONS_BASIC: "Practice inverse operations for one-variable linear equations.",
  COMBINING_LIKE_TERMS: "Practice identifying like terms and combining their coefficients.",
  DISTRIBUTIVE_PROPERTY: "Practice distributing a coefficient to every term inside parentheses.",
  EXPONENT_RULES: "Review the product rule for exponents with the same base.",
  MIDPOINT: "Practice averaging x-coordinates and y-coordinates separately.",
  SLOPE_CALCULATION: "Practice rise over run and calculating slope from two points.",
  FUNCTION_EVALUATION: "Practice substituting an input into a function and simplifying carefully.",
  PYTHAGOREAN_THEOREM: "Practice identifying the hypotenuse and applying the Pythagorean theorem.",
  POLYGON_ANGLES: "Practice the interior-angle sum formula for polygons.",
  AREA_RECTANGLE: "Review area formulas and matching dimensions to the correct formula.",
  RATIOS_PROPORTIONS: "Practice setting up equivalent ratios and solving proportions.",
  WORD_PROBLEMS_LINEAR: "Practice translating a real-world situation into a linear equation.",
  LINEAR_EQUATIONS_MULTISTEP: "Practice solving equations that require several inverse-operation steps.",
  FACTORING_QUADRATICS: "Practice factoring quadratic expressions using factor pairs.",
  SYSTEMS_LINEAR: "Practice solving two linear equations by substitution or elimination.",
  LINEAR_FUNCTION_INTERPRETATION: "Practice interpreting slope as the direction and rate of change of a line.",
  ANGLE_RELATIONSHIPS: "Review complementary, supplementary, and related angle relationships.",
  TRIANGLE_ANGLES: "Practice using the 180° angle sum of a triangle.",
  SPECIAL_TRIANGLES: "Review the side relationships in 30-60-90 triangles.",
  CIRCLE_MEASUREMENT: "Review circumference and radius/diameter relationships.",
  SPECIAL_ANGLE_TRIG: "Memorize and apply key special-angle sine and cosine values.",
  RIGHT_TRIANGLE_TRIG: "Practice identifying sine, cosine, and tangent from side relationships.",
  TRIG_APPLICATIONS: "Practice using a trigonometric ratio to find an unknown side.",
  LOGARITHMS_FOUNDATION: "Review logarithms as another way to represent exponential relationships.",
  EXPONENT_LOG_RELATIONSHIP: "Practice converting between exponential and logarithmic thinking.",
  FUNCTION_FOUNDATION: "Strengthen function evaluation before moving into limits and derivatives.",
  RATIONAL_EXPRESSIONS: "Practice factoring and simplifying rational expressions.",
  LIMIT_FOUNDATION: "Review direct substitution and the meaning of a function approaching a value.",
  LIMIT_ALGEBRAIC_SIMPLIFICATION: "Practice algebraic simplification before evaluating an indeterminate-looking limit."
};

let profile = {};
let questions = [];
let currentIndex = 0;
let answers = {};
let selectedAnswer = null;

const screens = {
  intro: document.getElementById("intro-screen"),
  profile: document.getElementById("profile-screen"),
  quiz: document.getElementById("quiz-screen"),
  email: document.getElementById("email-screen"),
  success: document.getElementById("success-screen")
};

function showScreen(screen) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screen].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function chooseTargetedModule() {
  const subject = profile.currentSubject.toLowerCase();
  const struggle = profile.biggestStruggle.toLowerCase();

  if (subject.includes("calculus") || struggle.includes("calculus")) return "CALCULUS";
  if (subject.includes("trigonometry") || struggle.includes("trigonometry")) return "TRIGONOMETRY";
  if (subject.includes("precalculus") || struggle.includes("precalculus") || struggle.includes("advanced algebra")) return "PRECALCULUS";
  if (subject.includes("geometry") || struggle.includes("geometry")) return "GEOMETRY";
  return "ALGEBRA";
}

function getProfile() {
  profile = {
    age: document.getElementById("age").value,
    educationLevel: document.getElementById("educationLevel").value,
    currentSubject: document.getElementById("currentSubject").value,
    biggestStruggle: document.getElementById("biggestStruggle").value,
    confidence: document.getElementById("confidence").value,
    goal: document.getElementById("goal").value
  };
}

function startQuiz() {
  const moduleKey = chooseTargetedModule();
  questions = [...coreQuestions, ...targetedModules[moduleKey].questions];
  profile.targetedModule = targetedModules[moduleKey].label;
  currentIndex = 0;
  answers = {};
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const q = questions[currentIndex];
  selectedAnswer = answers[q.id] || null;

  document.getElementById("question-counter").textContent =
    `QUESTION ${currentIndex + 1} OF ${questions.length}`;

  document.getElementById("question-number").textContent =
    String(currentIndex + 1).padStart(2, "0");

  document.getElementById("question-text").textContent = q.question;
  document.getElementById("category-pill").textContent = q.categoryLabel;

  const progress = ((currentIndex + 1) / questions.length) * 100;
  document.getElementById("quiz-progress").style.width = `${progress}%`;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    if (optionText === selectedAnswer) button.classList.add("selected");

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = optionText;

    button.appendChild(letter);
    button.appendChild(text);

    button.addEventListener("click", () => {
      selectedAnswer = optionText;
      answers[q.id] = optionText;

      document.querySelectorAll(".option").forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
      document.getElementById("next-btn").disabled = false;
    });

    optionsContainer.appendChild(button);
  });

  document.getElementById("next-btn").disabled = !selectedAnswer;
  document.getElementById("next-btn").textContent =
    currentIndex === questions.length - 1 ? "Finish Diagnostic" : "Next Question";
}

function calculateResults() {
  const core = questions.slice(0, 20);
  const targeted = questions.slice(20);

  const coreScore = core.reduce((sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0), 0);
  const targetedScore = targeted.reduce((sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0), 0);

  const categoryStats = {};

  core.forEach(q => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = {
        label: q.categoryLabel,
        correct: 0,
        total: 0,
        missedSkills: []
      };
    }

    categoryStats[q.category].total++;

    if (answers[q.id] === q.answer) {
      categoryStats[q.category].correct++;
    } else {
      categoryStats[q.category].missedSkills.push(q.skill);
    }
  });

  const categories = Object.values(categoryStats).map(stat => ({
    ...stat,
    percentage: Math.round((stat.correct / stat.total) * 100)
  }));

  categories.sort((a, b) => a.percentage - b.percentage);

  const weakest = categories[0];
  const strongest = categories[categories.length - 1];

  return {
    coreScore,
    coreTotal: 20,
    targetedScore,
    targetedTotal: 4,
    categories,
    weakestArea: weakest?.label || "",
    weakestPercentage: weakest?.percentage ?? 0,
    strongestArea: strongest?.label || "",
    strongestPercentage: strongest?.percentage ?? 0,
    missedSkills: [...new Set(categories.flatMap(c => c.missedSkills))]
  };
}

function buildPayload(email) {
  const results = calculateResults();

  const answerRecords = questions.map(q => ({
    id: q.id,
    category: q.category,
    skill: q.skill,
    selected: answers[q.id] || "",
    correct: q.answer,
    isCorrect: answers[q.id] === q.answer
  }));

  return {
    timestamp: new Date().toISOString(),
    email,
    profile,
    results,
    answers: answerRecords,
    status: "Pending"
  };
}

async function submitToGoogleSheets(payload) {
  if (GOOGLE_APPS_SCRIPT_URL.includes("PASTE_YOUR")) {
    throw new Error("Google Apps Script URL has not been configured yet.");
  }

  await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });
}

document.getElementById("start-btn").addEventListener("click", () => {
  showScreen("profile");
});

document.getElementById("profile-form").addEventListener("submit", event => {
  event.preventDefault();
  getProfile();
  startQuiz();
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (!selectedAnswer) return;

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showScreen("email");
  }
});

document.getElementById("email-form").addEventListener("submit", async event => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const submitButton = document.getElementById("submit-btn");
  const status = document.getElementById("submit-status");

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  status.textContent = "";

  const payload = buildPayload(email);

  try {
    await submitToGoogleSheets(payload);
    showScreen("success");
  } catch (error) {
    console.error(error);
    status.textContent =
      "We couldn't submit your results yet. Please check the setup or try again.";
    submitButton.disabled = false;
    submitButton.textContent = "Submit My Diagnostic";
  }
});

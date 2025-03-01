import { Question } from '@/types/question';

export const getModuleOneQuestions = (topicIndex: number): Question[] => {
  const questions: { [key: string]: Question[] } = {
    1: [
      {
        question: "Что такое DevOps?",
        options: [
          "Методология разработки ПО, объединяющая разработку и эксплуатацию",
          "Язык программирования",
          "Операционная система",
          "Система управления базами данных"
        ],
        correctAnswer: 0
      },
      {
        question: "Какая основная цель DevOps?",
        options: [
          "Увеличение скорости разработки в ущерб качеству",
          "Сокращение штата сотрудников",
          "Ускорение и улучшение процесса доставки ПО",
          "Полная автоматизация без участия человека"
        ],
        correctAnswer: 2
      },
      {
        question: "Что НЕ является принципом DevOps?",
        options: [
          "Непрерывная интеграция",
          "Автоматизация",
          "Изоляция команд разработки и эксплуатации",
          "Мониторинг и обратная связь"
        ],
        correctAnswer: 2
      },
      {
        question: "Какой инструмент НЕ относится к экосистеме DevOps?",
        options: [
          "Jenkins",
          "Microsoft Word",
          "Docker",
          "Kubernetes"
        ],
        correctAnswer: 1
      },
      {
        question: "Что такое CI/CD в контексте DevOps?",
        options: [
          "Непрерывная интеграция и доставка",
          "Компьютерные инструкции и документация",
          "Контроль изменений и дебаггинг",
          "Централизованная идентификация и доступ"
        ],
        correctAnswer: 0
      }
    ],
    2: [
      {
        question: "Какие навыки необходимы DevOps-инженеру?",
        options: [
          "Только знание программирования",
          "Только знание систем администрирования",
          "Комбинация технических и soft skills",
          "Только коммуникативные навыки"
        ],
        correctAnswer: 2
      },
      {
        question: "Что такое культура DevOps?",
        options: [
          "Строгая иерархия в команде",
          "Сотрудничество и общая ответственность",
          "Работа в изоляции",
          "Конкуренция между отделами"
        ],
        correctAnswer: 1
      },
      {
        question: "Как измеряется успех DevOps?",
        options: [
          "Только по скорости доставки",
          "Только по количеству исправленных ошибок",
          "По комбинации метрик производительности и качества",
          "По количеству строк кода"
        ],
        correctAnswer: 2
      },
      {
        question: "Какой подход к безопасности используется в DevOps?",
        options: [
          "DevSecOps - интеграция безопасности на всех этапах",
          "Проверка безопасности только перед релизом",
          "Безопасность не входит в scope DevOps",
          "Ручное тестирование безопасности"
        ],
        correctAnswer: 0
      },
      {
        question: "Что такое Infrastructure as Code?",
        options: [
          "Написание документации к инфраструктуре",
          "Управление инфраструктурой через код",
          "Кодирование на инфраструктурном уровне",
          "Инфраструктурное программирование"
        ],
        correctAnswer: 1
      }
    ]
  };

  return questions[topicIndex] || [];
};
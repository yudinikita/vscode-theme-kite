;; Clojure Example

(def name "John")
(def age 30)

(if (>= age 18)
  (println (str "Welcome, " name))
  (println (str "Sorry, " name ". You must be 18 or older to enter.")))

(dotimes [i 5]
  (println (str "Current number: " i)))

(def fruits ["apple" "banana" "orange"])

(defn greet [name]
  (println (str "Hello, " name "!")))

(greet "Alice")

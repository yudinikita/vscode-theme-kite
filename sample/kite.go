package main

import (
	"fmt"
	"math"
)

type Shape interface {
	Area() float64
	Perimeter() float64
}

type Rectangle struct {
	length, width float64
}

func (r Rectangle) Area() float64 {
	return r.length * r.width
}

func (r Rectangle) Perimeter() float64 {
	return 2*(r.length + r.width)
}

type Circle struct {
	radius float64
}

func (c Circle) Area() float64 {
	return math.Pi * c.radius * c.radius
}

func (c Circle) Perimeter() float64 {
	return 2 * math.Pi * c.radius
}

func PrintShapeDetails(s Shape) {
	fmt.Printf("Area: %.2f\n", s.Area())
	fmt.Printf("Perimeter: %.2f\n", s.Perimeter())
}

func main() {
	rect := Rectangle{length: 5, width: 3}
	circ := Circle{radius: 2.5}

	PrintShapeDetails(rect)
	PrintShapeDetails(circ)
}

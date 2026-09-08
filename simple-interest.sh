#!/bin/bash

# simple-interest.sh
# A simple calculator to compute Simple Interest based on user input.
# Formula: Simple Interest (SI) = (Principal * Rate * Time) / 100

echo "=================================="
echo "   Simple Interest Calculator"
echo "=================================="

# Prompt user for input
read -p "Enter Principal amount: " principal
read -p "Enter Rate of Interest (in %): " rate
read -p "Enter Time period (in years): " time

# Validate that inputs are not empty
if [[ -z "$principal" || -z "$rate" || -z "$time" ]]; then
    echo "Error: Principal, Rate, and Time cannot be empty."
    exit 1
fi

# Calculate Simple Interest using awk for floating point arithmetic
simple_interest=$(awk -v p="$principal" -v r="$rate" -v t="$time" 'BEGIN { printf "%.2f", (p * r * t) / 100 }')

# Calculate Total Amount (Principal + Interest)
total_amount=$(awk -v p="$principal" -v si="$simple_interest" 'BEGIN { printf "%.2f", p + si }')

# Display the results
echo "----------------------------------"
echo "Principal Amount   : $principal"
echo "Rate of Interest   : $rate%"
echo "Time Period        : $time year(s)"
echo "----------------------------------"
echo "Simple Interest     : $simple_interest"
echo "Total Amount        : $total_amount"
echo "=================================="
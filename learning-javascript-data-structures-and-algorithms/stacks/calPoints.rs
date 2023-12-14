use std::collections::VecDeque;

fn cal_points(ops: Vec<&str>) -> i32 {
    let mut stack: VecDeque<i32> = VecDeque::new();
    for op in ops {
        match op {
            "+" => {
                let top = *stack.back().unwrap_or(&0);
                let new_top = top + *stack.get(stack.len() - 2).unwrap_or(&0);
                stack.push_back(new_top);
            },
            "D" => {
                let top = *stack.back().unwrap_or(&0);
                let d = top * 2;
                stack.push_back(d);
            },
            "C" => { stack.pop_back(); },
            _ => {
                let num = op.parse::<i32>().unwrap_or(0);
                stack.push_back(num);
            }
        }
    }
    let sum: i32 = stack.iter().sum();
    sum
}
from Battleship import GRID_SIZE, HitStatus
import random


class Bot:
    __last_turn_status = HitStatus.NONE
    __my_hit_list = [[False for _ in range(GRID_SIZE)] for _ in range(GRID_SIZE)]

    def do_turn(self, hit_grid, last_turn_status) -> (str, int):
        self.__last_turn_status = last_turn_status

        #print_hit_board(hit_grid)
        #print(self.__last_turn_status)

        # TODO Do something clever
        hits = get_all_hit_positions(hit_grid)
        for pos in hits:
            around = get_pos_around(hit_grid, pos[0], pos[1])
            for around_pos in around:
                status = get_status_of_pos(hit_grid, around_pos[0], around_pos[1])
                if status is HitStatus.NONE:
                    return colNumber_to_colLetter(around_pos[1]), around_pos[0]

        prob_matrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        ships_len = [2, 3, 3, 4, 5]
        for length in ships_len:
            prob_matrix = apply_ship_possibilities_to_matrix(hit_grid, prob_matrix, length)

        max_pos = find_max_pos_prob_matrix(prob_matrix)
        return colNumber_to_colLetter(max_pos[1]), max_pos[0]

        #while(True):
        #    row_index = random.randint(0, len(hit_grid) - 1)
        #    col_index = random.randint(0, len(hit_grid[0]) - 1)
        #    if get_status_of_pos(hit_grid, row_index, col_index) is HitStatus.NONE:
        #        return colNumber_to_colLetter(col_index), row_index

        # TODO Must return a tuple (colLetter, rowNumber)
        #return 'a', 0


def get_all_hit_positions(hit_grid):
    hit_pos = []
    for row_index, row in enumerate(hit_grid):
        for col_index, tile in enumerate(row):
            if tile is HitStatus.HIT:
                hit_pos.append((row_index, col_index))
    return hit_pos


def get_status_of_pos(hit_grid, rowIndex, colIndex):
    assert is_valid_position(hit_grid, rowIndex, colIndex)
    return hit_grid[rowIndex][colIndex]


def get_pos_around(hit_grid, rowIndex, colIndex):
    assert is_valid_position(hit_grid, rowIndex, colIndex)
    positions = [(rowIndex - 1, colIndex), (rowIndex + 1, colIndex), (rowIndex, colIndex - 1), (rowIndex, colIndex + 1)]
    valid_positions = []
    for pos in positions:
        if is_valid_position(hit_grid, pos[0], pos[1]):
            valid_positions.append(pos)
    return valid_positions


def apply_ship_possibilities_to_matrix(hit_grid, prob_matrix, ship_len):
    for row_index, row in enumerate(hit_grid):
        for col_index, tile in enumerate(row):
            pos_horizontal = []
            pos_vertical = []
            for i in range(ship_len):
                pos_horizontal.append((row_index, col_index + i))
                pos_vertical.append((row_index + i, col_index))
            is_valid_pos_horizontal = are_all_valid_pos(hit_grid, pos_horizontal) and are_all_None_pos(hit_grid, pos_horizontal)
            is_valid_pos_vertical = are_all_valid_pos(hit_grid, pos_vertical) and are_all_None_pos(hit_grid, pos_vertical)

            if is_valid_pos_horizontal:
                for pos_h in pos_horizontal:
                    prob_matrix[pos_h[0]][pos_h[1]] += ship_len

            if is_valid_pos_vertical:
                for pos_v in pos_vertical:
                    prob_matrix[pos_v[0]][pos_v[1]] += ship_len
    return prob_matrix


def are_all_valid_pos(hit_grid, pos_list):
    for pos in pos_list:
        if not is_valid_position(hit_grid, pos[0], pos[1]):
            return False
    return True


def are_all_None_pos(hit_grid, pos_list):
    for pos in pos_list:
        status = get_status_of_pos(hit_grid, pos[0], pos[1])
        if status != HitStatus.NONE:
            return False
    return True


def find_max_pos_prob_matrix(prob_matrix):
    max = 0
    for row_index, row in enumerate(prob_matrix):
        for col_index, tile in enumerate(row):
            value = prob_matrix[row_index][col_index]
            if value > max:
                max = value

    max_positions = []
    for row_index, row in enumerate(prob_matrix):
        for col_index, tile in enumerate(row):
            value = prob_matrix[row_index][col_index]
            if value == max:
                max_positions.append((row_index, col_index))

    chosen_pos_index = random.randint(0, len(max_positions)-1)
    return max_positions[chosen_pos_index]



def is_valid_position(hit_grid, rowIndex, colIndex):
    return (0 <= rowIndex < len(hit_grid)) and (0 <= colIndex < len(hit_grid[0]))


def colLetter_to_colNumber(colLetter):
    return ord(colLetter) - 97


def colNumber_to_colLetter(colNumber):
    return chr(colNumber + 97)


def print_hit_board(hit_grid):
    board_str = '#  ' + ''.join([f"{letter}  " for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[:GRID_SIZE]]) + '#\n'

    for row_index, row in enumerate(hit_grid):
        board_str += f"{row_index}  "
        for col_index, tile in enumerate(row):
            board_str += hit_grid[row_index][col_index].value
            board_str += "  "
        board_str += '#\n'

    board_str += "#  " + '#  ' * GRID_SIZE + '#\n'
    print(board_str)

